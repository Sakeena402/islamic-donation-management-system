import mongoose, { Types, Document } from 'mongoose';

// Define the IDonation interface for TypeScript typing
export interface IDonation extends Document {
  amount: number; // Amount donated
  donorId: Types.ObjectId; // Reference to the user who made the donation
  campaignId?: Types.ObjectId | null; // Reference to the campaign (if applicable)
  organizationId?: Types.ObjectId | null; // Reference to the Organization (if donation is directly to an organization)
  transactionId: string; // Unique transaction ID for the donation
  paymentMethod: 'Stripe' | 'Easypaisa' | 'JazzCash' | 'Bank'| 'CreditCard'|'others'; // Payment method used
  recurring: boolean; // Indicates whether the donation is recurring
  paymentDetails: string; // Sensitive payment details (should be handled securely)
  status: 'pending' | 'completed' | 'failed'; // Payment status
  createdAt?: Date; // Automatically added by Mongoose timestamps
  updatedAt?: Date; // Automatically added by Mongoose timestamps
}

const donationSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, 'Please specify the donation amount'],
      min: [1, 'Donation amount must be at least 1'],
    },
    donorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Donor information is required'],
    },
    campaignId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Campaign',
      default: null,
    },
    organizationId: { 
      type: Types.ObjectId, 
      ref: 'Organization',
      default: null,
    },
    transactionId: {
      type: String,
      required: [true, 'Transaction ID is required'],
      unique: true,
    },
    paymentMethod: {
      type: String,
      enum: ['Stripe', 'Easypaisa', 'JazzCash', 'Bank', 'CreditCard', 'others'],
      required: [true, 'Please select a payment method'],
    },
    recurring: {
      type: Boolean,
      default: false,
    },
    paymentDetails: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

// Validate that at least one destination (campaign or organization) is provided
donationSchema.pre('save', function(next) {
  if (!this.campaignId && !this.organizationId) {
    next(new Error('Donation must be made to either a campaign or an organization'));
  } else {
    next();
  }
});

// Create the Donation model
const Donation = mongoose.models.Donation || mongoose.model('Donation', donationSchema);

export default Donation;
