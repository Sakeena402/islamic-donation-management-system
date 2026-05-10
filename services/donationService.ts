import Donation from "@/models/donationModel";
import Campaign from "@/models/campaignModel";

export const createDonation = async (data: any) => {
  try {
    const donation = new Donation(data);
    return await donation.save();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to create donation: ${error.message}`);
    }
    throw error;
  }
};

export const getDonations = async (filter: any = {}) => {
  try {
    return await Donation.find(filter)
      .populate('donorId', 'username email')
      .populate('campaignId', 'title targetAmount collectedAmount')
      .sort({ createdAt: -1 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch donations: ${error.message}`);
    }
    throw error;
  }
};

export const getDonationById = async (id: string) => {
  try {
    return await Donation.findById(id)
      .populate('donorId', 'username email')
      .populate('campaignId', 'title targetAmount collectedAmount');
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch donation: ${error.message}`);
    }
    throw error;
  }
};

export const updateDonation = async (id: string, updateData: any) => {
  try {
    return await Donation.findByIdAndUpdate(id, updateData, { 
      new: true,
      runValidators: true 
    }).populate('donorId', 'username email')
      .populate('campaignId', 'title');
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to update donation: ${error.message}`);
    }
    throw error;
  }
};

export const updateDonationStatus = async (id: string, status: 'pending' | 'completed' | 'failed') => {
  try {
    const donation = await Donation.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    // If status is completed and donation is to a campaign, no need to update collectedAmount
    // (it's already updated during donation creation)
    if (status === 'completed' && donation?.campaignId) {
      // Mark campaign as active if not already
      await Campaign.findByIdAndUpdate(
        donation.campaignId,
        { $set: { isActive: true } },
        { new: true }
      );
    }

    return donation;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to update donation status: ${error.message}`);
    }
    throw error;
  }
};

export const deleteDonation = async (id: string) => {
  try {
    const donation = await Donation.findByIdAndDelete(id);
    
    // If donation was to a campaign and was completed, decrease collected amount
    if (donation && donation.campaignId && donation.status === 'completed') {
      await Campaign.findByIdAndUpdate(
        donation.campaignId,
        { $inc: { collectedAmount: -donation.amount } }
      );
    }

    return donation;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to delete donation: ${error.message}`);
    }
    throw error;
  }
};

export const getDonationsByCampaign = async (campaignId: string) => {
  try {
    return await Donation.find({ 
      campaignId, 
      status: 'completed' 
    }).populate('donorId', 'username')
      .sort({ createdAt: -1 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch campaign donations: ${error.message}`);
    }
    throw error;
  }
};

export const getDonationsByDonor = async (donorId: string) => {
  try {
    return await Donation.find({ donorId })
      .populate('campaignId', 'title')
      .sort({ createdAt: -1 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch donor donations: ${error.message}`);
    }
    throw error;
  }
};
