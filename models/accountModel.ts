import mongoose, { Types, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

// Define interfaces for different types of accounts
export interface IAccount extends Document {
  type: 'bank' | 'payment' | 'organization'; // Account type: bank, payment gateway, or organization account
  userId: Types.ObjectId | null; // Reference to the User if this is a user account
  organizationId: Types.ObjectId | null; // Reference to the Organization if this is an organization account
  accountDetails: IAccountDetails; // Account specific details
  clientSecret?: string; // For payment gateway integration (e.g., Stripe, PayPal)
  bankAccountDetails?: IBankAccountDetails; // Bank account details if the type is 'bank'
  status: 'active' | 'inactive'; // Whether the account is active or not
  createdAt?: Date; // Automatically added by Mongoose timestamps
  updatedAt?: Date; // Automatically added by Mongoose timestamps
}

export interface IAccountDetails {
  accountHolder: string;
  accountNumber: string;
  routingNumber: string;
  accountType: 'checking' | 'savings'; // Type of bank account
}

export interface IBankAccountDetails {
  bankName: string;
  bankBranch: string;
  accountHolderName: string;
  iban: string; // International Bank Account Number (IBAN)
  swiftCode: string; // SWIFT/BIC code
}

// Schema for Account
const accountSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['bank', 'payment', 'organization'], // Account type
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User schema if it's a user account
      default: null,
    },
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization', // Reference to the Organization schema if it's an organization account
      default: null,
    },
    accountDetails: {
      accountHolder: {
        type: String,
        required: true,
      },
      accountNumber: {
        type: String,
        required: true,
        unique: true, // Ensure account number is unique
      },
      routingNumber: {
        type: String,
        required: true,
      },
      accountType: {
        type: String,
        enum: ['checking', 'savings'],
        required: true,
      },
    },
    clientSecret: {
      type: String, // Sensitive info, for example, from Stripe or PayPal
      required: false,
    },
    bankAccountDetails: {
      bankName: {
        type: String,
        required: false,
      },
      bankBranch: {
        type: String,
        required: false,
      },
      accountHolderName: {
        type: String,
        required: false,
      },
      iban: {
        type: String,
        required: false,
      },
      swiftCode: {
        type: String,
        required: false,
      },
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  { timestamps: true }
);

// Pre-save hook removed - sensitive data should be encrypted at application layer or via environment-based key management
// Do NOT hash fields like clientSecret, IBAN, or accountNumber as they need to remain readable for payment processing

// Create the Account model
const Account = mongoose.models.Account || mongoose.model('Account', accountSchema);

export default Account;
