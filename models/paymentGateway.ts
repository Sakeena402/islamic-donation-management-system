import mongoose, { Document, Types } from 'mongoose';

// Define the Payment Gateway Schema
export interface IPaymentGateway extends Document {
  name: string; // e.g., "Stripe", "Easypaisa"
  provider: string; // Payment provider name (e.g., "Stripe", "PayPal")
  clientSecret: string; // Client secret for authentication (sensitive, should be encrypted)
  publicKey: string; // Public key for front-end interactions
  isActive: boolean; // Whether this payment gateway is active or not
  createdAt: Date;
  updatedAt: Date;
}

const paymentGatewaySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    provider: { type: String, required: true },
    clientSecret: { type: String, required: true },
    publicKey: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const PaymentGateway = mongoose.models.PaymentGateway || mongoose.model('PaymentGateway', paymentGatewaySchema);
export default PaymentGateway;
