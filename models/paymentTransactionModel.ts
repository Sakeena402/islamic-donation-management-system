import mongoose, { Document, Types } from 'mongoose';

// Define the Payment Transaction Schema
export interface IPaymentTransaction extends Document {
  donorId: Types.ObjectId | string; // Reference to the donor (user making the donation)
  campaignId: Types.ObjectId | string; // Reference to the campaign being donated to
  amount: number; // Amount of money donated
  paymentGatewayId: Types.ObjectId | string; // Payment Gateway used for the transaction
  transactionId: string; // Unique transaction ID provided by the payment gateway
  paymentMethod: string; // e.g., "creditCard", "bankTransfer", "eWallet"
  status: 'pending' | 'completed' | 'failed'; // Payment status
  donationDate: Date; // Date when the donation was made
  isRecurring: boolean; // Whether the donation is recurring
  nextPaymentDate?: Date; // If recurring, the next payment date
}

const paymentTransactionSchema = new mongoose.Schema(
  {
    donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    campaignId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign', required: true },
    amount: { type: Number, required: true },
    paymentGatewayId: { type: mongoose.Schema.Types.ObjectId, ref: 'PaymentGateway', required: true },
    transactionId: { type: String, required: true },
    paymentMethod: { type: String, required: true }, // e.g., "creditCard", "bankTransfer"
    status: { 
      type: String, 
      enum: ['pending', 'completed', 'failed'], 
      default: 'pending', 
    },
    donationDate: { type: Date, default: Date.now },
    isRecurring: { type: Boolean, default: false },
    nextPaymentDate: { type: Date, default: null }, // For recurring payments
  },
  { timestamps: true }
);

const PaymentTransaction = mongoose.models.PaymentTransaction || mongoose.model('PaymentTransaction', paymentTransactionSchema);
export default PaymentTransaction;
