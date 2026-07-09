import jwt from 'jsonwebtoken';
import connectDB from '@/dbConfig/dbConfig';
import { NextResponse, NextRequest } from 'next/server';
import { approveCampaign, rejectCampaign, getPendingCampaigns } from '@/services/campaignService';

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

const successResponse = (message: string, data: any = null) => {
  return NextResponse.json({ success: true, message, data, status: 200 });
};

const errorResponse = (message: string, status: number = 400) => {
  return NextResponse.json({ success: false, error: message, status }, { status });
};

// POST: Approve a campaign
export async function POST(request: NextRequest) {
  try {
    const user = verifyToken(request);

    // Only admins can approve campaigns
    if (user.role?.toLowerCase() !== 'admin') {
      return errorResponse('Only admins can approve campaigns', 403);
    }

    const reqBody = await request.json();
    const { campaignId } = reqBody;

    if (!campaignId) {
      return errorResponse('Campaign ID is required', 400);
    }

    const campaign = await approveCampaign(campaignId, user.id);
    return successResponse('Campaign approved successfully', campaign);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error while approving campaign';
    console.error('[v0] Error approving campaign:', error);
    return errorResponse(message, 500);
  }
}

// PUT: Reject a campaign
export async function PUT(request: NextRequest) {
  try {
    const user = verifyToken(request);

    // Only admins can reject campaigns
    if (user.role?.toLowerCase() !== 'admin') {
      return errorResponse('Only admins can reject campaigns', 403);
    }

    const reqBody = await request.json();
    const { campaignId, reason } = reqBody;

    if (!campaignId || !reason) {
      return errorResponse('Campaign ID and rejection reason are required', 400);
    }

    const campaign = await rejectCampaign(campaignId, user.id, reason);
    return successResponse('Campaign rejected successfully', campaign);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error while rejecting campaign';
    console.error('[v0] Error rejecting campaign:', error);
    return errorResponse(message, 500);
  }
}

// GET: Fetch pending campaigns (admin only)
export async function GET(request: NextRequest) {
  try {
    const user = verifyToken(request);

    // Only admins can view pending campaigns
    if (user.role?.toLowerCase() !== 'admin') {
      return errorResponse('Only admins can view pending campaigns', 403);
    }

    const campaigns = await getPendingCampaigns();
    return successResponse('Pending campaigns fetched successfully', campaigns);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error while fetching pending campaigns';
    console.error('[v0] Error fetching pending campaigns:', error);
    return errorResponse(message, 500);
  }
}
