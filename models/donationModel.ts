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

// Define the donation schema
const donationSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, 'Please specify the donation amount'],
    },
    donorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User schema
      required: [true, 'Donor information is required'],
    },
    campaignId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Campaign', // Reference to the Campaign schema (if applicable)
      default: null,
    },
    organizationId: { 
      type: Types.ObjectId, 
      ref: 'Organization', // Reference to the Organization schema
      required: false, // Donations can be made to campaigns or organizations
    },
    transactionId: {
      type: String,
      required: [true, 'Transaction ID is required'],
      unique: true, // Ensure the transaction ID is unique
    },
    paymentMethod: {
      type: String,
      enum: ['Stripe', 'Easypaisa', 'JazzCash', 'Bank', 'CreditCard','others'],
      required: [true, 'Please select a payment method'],
    },
    recurring: {
      type: Boolean,
      default: false, // Defaults to false, unless specified
    },
    paymentDetails: {
      type: String, // Sensitive payment details
      required: false, // Should be securely stored, so not required in schema
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending', // Default to pending until payment is processed
    },
  },
  { timestamps: true }
);

// Create the Donation model
const Donation = mongoose.models.Donation || mongoose.model('Donation', donationSchema);

export default Donation;
