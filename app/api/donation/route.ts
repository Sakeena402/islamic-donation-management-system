import connectDB from '@/dbConfig/dbConfig';
import Donation from '@/models/donationModel';
import { NextResponse, NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

connectDB();

// Helper function to verify token and extract user data
const verifyToken = (request: NextRequest) => {
    const token = request.cookies.get('token');
    if (!token) {
        throw new Error('Unauthorized');
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY!);
        return user;
    } catch {
        throw new Error('Invalid token');
    }
};

// Create Donation
export async function POST(request: NextRequest) {
    try {
        const user = verifyToken(request); // Verify and extract user data
        const reqBody = await request.json();
        const { amount, donorId, campaignId, paymentMethod } = reqBody;

        // Validation
        if (!amount || !donorId || !paymentMethod) {
            return NextResponse.json(
                { error: "Amount, donorId, and paymentMethod are required" },
                { status: 400 }
            );
        }

        // Ensure the donorId matches the user making the request
        if (user.id !== donorId) {
            return NextResponse.json(
                { error: "You can only donate for yourself" },
                { status: 403 }
            );
        }

        // Create Donation
        const donation = new Donation({
            amount,
            donorId,
            campaignId,
            paymentMethod,
        });

        await donation.save();

        return NextResponse.json({
            message: "Donation created successfully",
            success: true,
            status: 201,
        });
    } catch (error: any) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: error.message || 'Server error' },
            { status: 500 }
        );
    }
}

// Get Donations
export async function GET(request: NextRequest) {
    try {
        const user = verifyToken(request); // Verify and extract user data
        const { searchParams } = new URL(request.url);
        const donorId = searchParams.get('donorId');
        const campaignId = searchParams.get('campaignId');

        const filter: any = {};

        // Authorization: User can only access their donations or donations related to their campaigns
        if (donorId && donorId !== user.id) {
            return NextResponse.json(
                { error: "You can only access your own donations" },
                { status: 403 }
            );
        }

        // If campaignId is provided, ensure that the user is either an admin or the campaign creator
        if (campaignId) {
            const campaign = await Campaign.findById(campaignId);
            if (!campaign) {
                return NextResponse.json(
                    { error: "Campaign not found" },
                    { status: 404 }
                );
            }

            if (user.role !== 'admin' && user.id !== campaign.createdBy.toString()) {
                return NextResponse.json(
                    { error: "You are not authorized to view donations for this campaign" },
                    { status: 403 }
                );
            }
            filter.campaignId = campaignId; // Add filter for campaignId
        }

        if (donorId) filter.donorId = donorId;

        const donations = await Donation.find(filter).populate('donorId campaignId', 'username title');

        return NextResponse.json({
            success: true,
            donations,
        });
    } catch (error: any) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: error.message || 'Server error' },
            { status: 500 }
        );
    }
}
