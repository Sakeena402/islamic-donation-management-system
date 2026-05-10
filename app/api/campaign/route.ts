import jwt from 'jsonwebtoken';
import connectDB from '@/dbConfig/dbConfig';
import Campaign from '@/models/campaignModel';
import { NextResponse, NextRequest } from 'next/server';
import { getCampaigns, createCampaign, updateCampaign, deleteCampaign } from '@/services/campaignService';

connectDB();

const verifyToken = (request: NextRequest) => {
  const token = request.cookies.get('token');
  if (!token) {
    throw new Error('Authentication token missing');
  }

  try {
    const decoded: any = jwt.verify(token.value, process.env.JWT_SECRET_KEY!);
    if (!decoded || !decoded.id || !decoded.role) {
      throw new Error('Invalid token data');
    }
    return decoded;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Token verification failed: ${error.message}`);
    }
    throw new Error('Token verification failed');
  }
};

const successResponse = (message: string, data: any = null, status: number = 200) => {
  return NextResponse.json({ success: true, message, data, status }, { status });
};

const errorResponse = (message: string, status: number = 400) => {
  return NextResponse.json({ success: false, error: message, status }, { status });
};

// POST: Create a new campaign
export async function POST(request: NextRequest) {
  try {
    const user = verifyToken(request);

    // Only admins and organizers can create campaigns
    if (!['admin', 'organizer'].includes(user.role?.toLowerCase())) {
      return errorResponse('Only admins and organizers can create campaigns', 403);
    }

    const reqBody = await request.json();
    const { title, description, image, category, purpose, targetAmount, startDate, endDate } = reqBody;

    // Validation
    if (!title || !description || !targetAmount || !category || !purpose || !startDate || !endDate) {
      return errorResponse('All fields are required', 400);
    }

    const targetAmountNum = Number(targetAmount);
    if (isNaN(targetAmountNum) || targetAmountNum <= 0) {
      return errorResponse('Target Amount must be a valid positive number', 400);
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return errorResponse('Invalid start or end date', 400);
    }

    if (start >= end) {
      return errorResponse('Start Date must be before End Date', 400);
    }

    const campaignData = {
      title,
      description,
      image: image || null,
      category,
      purpose,
      targetAmount: targetAmountNum,
      startDate: start,
      endDate: end,
      createdBy: user.id,
      requestedBy: user.role?.toLowerCase() === 'organizer' ? user.id : null,
      isApproved: user.role?.toLowerCase() === 'admin', // Auto-approve if admin creates
      status: 'active',
    };

    const campaign = await createCampaign(campaignData);
    return successResponse('Campaign created successfully', campaign, 201);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error while creating campaign';
    console.error('[v0] Error creating campaign:', error);
    return errorResponse(message, 500);
  }
}

// GET: Fetch campaigns
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const purpose = searchParams.get('purpose');
    const status = searchParams.get('status');

    const filter: any = { isApproved: true, isActive: true };
    if (category) filter.category = category.toLowerCase();
    if (purpose) filter.purpose = purpose.toLowerCase();
    if (status) filter.status = status.toLowerCase();

    const campaigns = await getCampaigns(filter);
    return successResponse('Campaigns fetched successfully', campaigns);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error while fetching campaigns';
    console.error('[v0] Error fetching campaigns:', error);
    return errorResponse(message, 500);
  }
}

// PUT: Update a campaign
export async function PUT(request: NextRequest) {
  try {
    const user = verifyToken(request);
    const reqBody = await request.json();
    const { id, title, description, image, category, purpose, targetAmount, startDate, endDate, status } = reqBody;

    if (!id) {
      return errorResponse('Campaign ID is required', 400);
    }

    const campaign = await Campaign.findById(id);
    if (!campaign) {
      return errorResponse('Campaign not found', 404);
    }

    // Check authorization (only admin or creator can update)
    if (user.role?.toLowerCase() !== 'admin' && user.id !== String(campaign.createdBy)) {
      return errorResponse('You are not authorized to update this campaign', 403);
    }

    const updateData: any = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (image) updateData.image = image;
    if (category) updateData.category = category;
    if (purpose) updateData.purpose = purpose;
    if (targetAmount) updateData.targetAmount = Number(targetAmount);
    if (startDate) updateData.startDate = new Date(startDate);
    if (endDate) updateData.endDate = new Date(endDate);
    if (status) updateData.status = status;

    const updatedCampaign = await updateCampaign(id, updateData);
    return successResponse('Campaign updated successfully', updatedCampaign);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error while updating campaign';
    console.error('[v0] Error updating campaign:', error);
    return errorResponse(message, 500);
  }
}

// DELETE: Delete a campaign
export async function DELETE(request: NextRequest) {
  try {
    const user = verifyToken(request);
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return errorResponse('Campaign ID is required', 400);
    }

    const campaign = await Campaign.findById(id);
    if (!campaign) {
      return errorResponse('Campaign not found', 404);
    }

    // Check authorization
    if (user.role?.toLowerCase() !== 'admin' && user.id !== String(campaign.createdBy)) {
      return errorResponse('You are not authorized to delete this campaign', 403);
    }

    await deleteCampaign(id);
    return successResponse('Campaign deleted successfully');
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error while deleting campaign';
    console.error('[v0] Error deleting campaign:', error);
    return errorResponse(message, 500);
  }
}
