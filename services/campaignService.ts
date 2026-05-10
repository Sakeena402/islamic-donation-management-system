import Campaign from "@/models/campaignModel";
import { Types } from "mongoose";

// Create a new campaign
export const createCampaign = async (data: any) => {
  try {
    const campaign = new Campaign(data);
    return await campaign.save();
  } catch (error: any) {
    throw new Error(`Failed to create campaign: ${error.message}`);
  }
};

// Get campaigns with optional filters
export const getCampaigns = async (filter: any = {}) => {
  try {
    return await Campaign.find(filter)
      .populate('requestedBy createdBy managedBy', 'username email role')
      .sort({ createdAt: -1 });
  } catch (error: any) {
    throw new Error(`Failed to fetch campaigns: ${error.message}`);
  }
};

// Get a single campaign by ID
export const getCampaignById = async (id: string) => {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error("Invalid campaign ID");
    }
    return await Campaign.findById(id)
      .populate('requestedBy createdBy managedBy', 'username email role');
  } catch (error: any) {
    throw new Error(`Failed to fetch campaign: ${error.message}`);
  }
};

// Update a campaign
export const updateCampaign = async (id: string, updateData: any) => {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error("Invalid campaign ID");
    }
    return await Campaign.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    }).populate('requestedBy createdBy managedBy', 'username email role');
  } catch (error: any) {
    throw new Error(`Failed to update campaign: ${error.message}`);
  }
};

// Delete a campaign
export const deleteCampaign = async (id: string) => {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error("Invalid campaign ID");
    }
    return await Campaign.findByIdAndDelete(id);
  } catch (error: any) {
    throw new Error(`Failed to delete campaign: ${error.message}`);
  }
};

// Approve a campaign (admin only)
export const approveCampaign = async (id: string, adminId: string) => {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error("Invalid campaign ID");
    }
    return await Campaign.findByIdAndUpdate(
      id,
      {
        isApproved: true,
        approvedBy: adminId,
        status: 'active',
      },
      { new: true, runValidators: true }
    ).populate('requestedBy createdBy managedBy', 'username email role');
  } catch (error: any) {
    throw new Error(`Failed to approve campaign: ${error.message}`);
  }
};

// Reject a campaign (admin only)
export const rejectCampaign = async (id: string, adminId: string, reason: string) => {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error("Invalid campaign ID");
    }
    return await Campaign.findByIdAndUpdate(
      id,
      {
        isApproved: false,
        approvedBy: adminId,
        reasonForRejection: reason,
        status: 'closed',
      },
      { new: true, runValidators: true }
    ).populate('requestedBy createdBy managedBy', 'username email role');
  } catch (error: any) {
    throw new Error(`Failed to reject campaign: ${error.message}`);
  }
};

// Get pending campaigns (not approved yet)
export const getPendingCampaigns = async () => {
  try {
    return await Campaign.find({ isApproved: false })
      .populate('requestedBy createdBy', 'username email role')
      .sort({ createdAt: -1 });
  } catch (error: any) {
    throw new Error(`Failed to fetch pending campaigns: ${error.message}`);
  }
};

// Update campaign status
export const updateCampaignStatus = async (id: string, status: string) => {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error("Invalid campaign ID");
    }
    if (!['active', 'paused', 'completed', 'closed'].includes(status)) {
      throw new Error("Invalid campaign status");
    }
    return await Campaign.findByIdAndUpdate(id, { status }, { new: true }).populate(
      'requestedBy createdBy managedBy',
      'username email role'
    );
  } catch (error: any) {
    throw new Error(`Failed to update campaign status: ${error.message}`);
  }
};
