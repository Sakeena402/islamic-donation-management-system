import jwt from 'jsonwebtoken';
import connectDB from '@/dbConfig/dbConfig';
import Campaign from '@/models/campaignModel';
import { NextResponse, NextRequest } from 'next/server';

// Connect to the database
connectDB();

// Helper function to verify the JWT token and extract user data securely
const verifyToken = (request: NextRequest) => {
  const token = request.cookies.get('token');
  if (!token) {
    throw new Error('Authentication token missing');
  }

  try {
    // Verify the JWT token and extract user data
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET_KEY!);
    if (!decoded || !decoded.id || !decoded.role) {
      throw new Error('Invalid token data');
    }
    return decoded; // Returning the user data (id, role) from token
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

// Helper function for successful responses
const successResponse = (message: string, data: any = null) => {
  return NextResponse.json({
    success: true,
    message,
    data,
    status: 200,
  });
};

// Helper function for error responses
const errorResponse = (message: string, status: number = 400) => {
  return NextResponse.json({
    success: false,
    error: message,
    status,
  });
};

// POST Request: Create a new campaign
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { title, description, image, category, purpose, targetAmount, startDate, endDate, createdBy, requestedBy } = reqBody;

    // Validation
    if (!title || !description || !targetAmount || !category || !purpose || !startDate || !endDate || !createdBy) {
      return errorResponse('All fields are required', 400);
    }

    const targetAmountNum = Number(targetAmount);
    if (isNaN(targetAmountNum)) {
      return errorResponse('Target Amount must be a valid number', 400);
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return errorResponse('Invalid start or end date', 400);
    }

    if (start >= end) {
      return errorResponse('Start Date must be before End Date', 400);
    }

    // Handle image upload (Here, assuming it's a base64 or URL. If using cloud storage, replace with actual logic)
    let imageUrl = '';
    if (image) {
      imageUrl = image; // Handle image upload logic here (e.g., AWS S3)
    }

    // Create a new campaign document
    const campaign = new Campaign({
      title,
      description,
      image: imageUrl,
      category,
      purpose,
      targetAmount: targetAmountNum,
      startDate: start,
      endDate: end,
      requestedBy,
      createdBy,
      isApproved: true,
      isActive: true,
    });

    // Save the campaign to MongoDB
    await campaign.save();
    return successResponse('Campaign created successfully', campaign);
  } catch (error: any) {
    console.error('Error creating campaign:', error);
    return errorResponse(error.message || 'Server error while creating campaign', 500);
  }
}

// GET Request: Fetch campaigns
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category'); // Get category from query params

    const filter: any = {};
    if (category) filter.category = category; // Apply filter for category

    const campaigns = await Campaign.find(filter)
      .populate('requestedBy createdBy', 'username email'); // Populate user data (username, email)

    return successResponse('Campaigns fetched successfully', campaigns);
  } catch (error: any) {
    console.error('Error fetching campaigns:', error);
    return errorResponse(error.message || 'Server error while fetching campaigns', 500);
  }
}

// PUT Request: Update a campaign
export async function PUT(request: NextRequest) {
  try {
    const user = verifyToken(request); // Verify token and extract user data
    const reqBody = await request.json();
    const { id, title, description, image, category, purpose, targetAmount, startDate, endDate, isApproved, isActive } = reqBody;

    // Validation
    if (!id || (!title && !description && !image && !category && !purpose && !targetAmount && !startDate && !endDate)) {
      return errorResponse('ID and at least one field to update are required', 400);
    }

    // Find the campaign by ID
    const campaign = await Campaign.findById(id);
    if (!campaign) {
      return errorResponse('Campaign not found', 404);
    }

    // Check authorization (only admin or the campaign creator can update)
    if (user.role !== 'admin' && user.id !== String(campaign.createdBy)) {
      return errorResponse('You are not authorized to update this campaign', 403);
    }

    // Update the campaign with the new values
    if (title) campaign.title = title;
    if (description) campaign.description = description;
    if (image) campaign.image = image;  // Handle image upload if needed
    if (category) campaign.category = category;
    if (purpose) campaign.purpose = purpose;
    if (targetAmount) campaign.targetAmount = Number(targetAmount);
    if (startDate) campaign.startDate = new Date(startDate);
    if (endDate) campaign.endDate = new Date(endDate);
    if (isApproved !== undefined) campaign.isApproved = isApproved;
    if (isActive !== undefined) campaign.isActive = isActive;

    await campaign.save();
    return successResponse('Campaign updated successfully', campaign);
  } catch (error: any) {
    console.error('Error updating campaign:', error);
    return errorResponse(error.message || 'Server error while updating campaign', 500);
  }
}

// DELETE Request: Delete a campaign
export async function DELETE(request: NextRequest) {
  try {
    const user = verifyToken(request); // Verify token and extract user data
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id'); // Get campaign ID from query params

    // Validation
    if (!id) {
      return errorResponse('Campaign ID is required', 400);
    }

    // Find the campaign
    const campaign = await Campaign.findById(id);
    if (!campaign) {
      return errorResponse('Campaign not found', 404);
    }

    // Check authorization (only admin or the campaign creator can delete)
    if (user.role !== 'admin' && user.id !== String(campaign.createdBy)) {
      return errorResponse('You are not authorized to delete this campaign', 403);
    }

    await Campaign.findByIdAndDelete(id);
    return successResponse('Campaign deleted successfully');
  } catch (error: any) {
    console.error('Error deleting campaign:', error);
    return errorResponse(error.message || 'Server error while deleting campaign', 500);
  }
}
