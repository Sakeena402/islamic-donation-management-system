import Donation from "@/models/donationModel";


export const createDonation = async (data: any) => {
  const donation = new Donation(data);
  return await donation.save();
};

export const getDonations = async (filter: any = {}) => {
  return await Donation.find(filter).populate('donorId campaignId', 'username title');
};

export const updateDonation = async (id: string, updateData: any) => {
  return await Donation.findByIdAndUpdate(id, updateData, { new: true });
};
