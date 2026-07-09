import connectDB from '@/dbConfig/dbConfig';
import Donation from '@/models/donationModel';
import Campaign from '@/models/campaignModel';
import { NextResponse, NextRequest } from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromToken';
import { v4 as uuidv4 } from 'uuid';

connectDB();

// Create Donation
export async function POST(request: NextRequest) {
  try {
    const user = getDataFromToken(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const reqBody = await request.json();
    const { amount, campaignId, organizationId, paymentMethod, recurring } = reqBody;

    // Validation
    if (!amount || !paymentMethod) {
      return NextResponse.json(
        { error: 'Amount and paymentMethod are required' },
        { status: 400 }
      );
    }

    if (amount <= 0 || !Number.isFinite(amount)) {
      return NextResponse.json(
        { error: 'Donation amount must be a positive number' },
        { status: 400 }
      );
    }

    if (!campaignId && !organizationId) {
      return NextResponse.json(
        { error: 'Donation must be made to either a campaign or an organization' },
        { status: 400 }
      );
    }

    // Verify campaign exists if provided
    if (campaignId) {
      const campaign = await Campaign.findById(campaignId);
      if (!campaign) {
        return NextResponse.json({ error: 'Campaign not found' }, { status: 404 });
      }
    }

    // Generate unique transactionId
    const transactionId = `TXN-${uuidv4()}`;

    // Create Donation
    const donation = new Donation({
      amount,
      donorId: user.id,
      campaignId: campaignId || null,
      organizationId: organizationId || null,
      transactionId,
      paymentMethod,
      recurring: recurring || false,
      status: 'pending',
    });

    await donation.save();

    // Update campaign's collectedAmount if donation is to a campaign
    if (campaignId) {
      await Campaign.findByIdAndUpdate(
        campaignId,
        { $inc: { collectedAmount: amount } },
        { new: true }
      );
    }

    return NextResponse.json({
      message: 'Donation created successfully',
      success: true,
      donation: {
        id: donation._id,
        transactionId: donation.transactionId,
        amount: donation.amount,
        status: donation.status,
      },
    }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Donation creation error:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    console.error('Unknown error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Get Donations
export async function GET(request: NextRequest) {
  try {
    const user = getDataFromToken(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const donorId = searchParams.get('donorId');
    const campaignId = searchParams.get('campaignId');

    const filter: any = {};

    // Authorization: User can only access their own donations
    if (donorId && donorId !== user.id) {
      return NextResponse.json(
        { error: 'You can only access your own donations' },
        { status: 403 }
      );
    }

    // If campaignId is provided, verify authorization
    if (campaignId) {
      const campaign = await Campaign.findById(campaignId);
      if (!campaign) {
        return NextResponse.json({ error: 'Campaign not found' }, { status: 404 });
      }

      // Only admin or campaign creator can view campaign donations
      if (user.role !== 'admin' && user.id !== campaign.createdBy?.toString()) {
        return NextResponse.json(
          { error: 'Not authorized to view donations for this campaign' },
          { status: 403 }
        );
      }
      filter.campaignId = campaignId;
    }

    // Default: show only user's own donations
    if (!donorId && !campaignId) {
      filter.donorId = user.id;
    } else if (donorId) {
      filter.donorId = donorId;
    }

    const donations = await Donation.find(filter)
      .populate('donorId', 'username email')
      .populate('campaignId', 'title');

    return NextResponse.json({ success: true, donations }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Get donations error:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
