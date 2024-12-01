import Campaign from "@/models/campaignModel";



export const createCampaign = async (data: any) => {
  const campaign = new Campaign(data);
  return await campaign.save();
};

export const getCampaigns = async (filter: any = {}) => {
  return await Campaign.find(filter).populate('requestedBy createdBy', 'username email');
};

export const updateCampaign = async (id: string, updateData: any) => {
  return await Campaign.findByIdAndUpdate(id, updateData, { new: true });
};
