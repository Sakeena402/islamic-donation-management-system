import mongoose, { Types, Document } from 'mongoose';

// Interface for Campaign
export interface ICampaign {
  title: string;
  description: string;
  image?: string;
  category: 'education' | 'healthcare' | 'environment' | 'others';
  purpose: 'zakat' | 'fitra' | 'sadqa' | 'general';
  targetAmount: number;
  collectedAmount?: number;
  startDate: Date;
  endDate: Date;
  requestedBy?: Types.ObjectId | string; // Organizer ID
  createdBy: Types.ObjectId | string; // Admin ID
  approvedBy?: Types.ObjectId | string; // Admin ID who approved the campaign
  managedBy?: Types.ObjectId | string; // Organizer managing the campaign
  isApproved?: boolean;
  isActive?: boolean;
  organization?: Types.ObjectId | string; // Reference to the Organization schema
  accountId?: Types.ObjectId | string; // Reference to the Organization schema
  paymentGatewayId?: Types.ObjectId | string; // Reference to the Organization schema
  status: 'paused'| 'completed'| 'closed'
  reasonForRejection?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

const CampaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  category: { 
    type: String, 
    enum: ['education', 'healthcare', 'environment', 'others'], 
    required: true 
  },
  purpose: { 
    type: String, 
    enum: ['zakat', 'fitra', 'sadqa', 'general'], 
    required: true 
  },
  targetAmount: { type: Number, required: true },
  collectedAmount: { type: Number, default: 0.0 },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },

  requestedBy: { 
    type: Types.ObjectId, 
    ref: 'User', 
    default: null 
  },

  createdBy: { 
    type: Types.ObjectId, 
    ref: 'User', 
    required: true 
  },

  approvedBy: { 
    type: Types.ObjectId, 
    ref: 'User', 
    default: null 
  },

  managedBy: { 
    type: Types.ObjectId, 
    ref: 'User', 
    default: null // Initially null; will point to `requestedBy` if approved
  },

  isApproved: { 
    type: Boolean, 
    default: function () {
      return this.createdBy && this.requestedBy === null;
    },
  },

  isActive: { type: Boolean, default: true },
  organization: { 
    type: Types.ObjectId, 
    ref: 'Organization', // Reference to the Organization schema
    required: false, // Campaigns can exist outside an organization
  },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account', // Reference to Account schema
    required: false // You can make this required if the campaign needs to always have an account linked
  },  
  paymentGatewayId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PaymentGateway', // Reference to PaymentGateway schema
    required: false // Optional, depending on whether you need to track a payment gateway for each campaign
  },
  status: { 
    type: String, 
    enum: ['active', 'paused', 'completed', 'closed'], 
    default: 'active' 
  },  
  reasonForRejection: { 
    type: String, 
    default: null, 
    required: function () {
      return !this.isApproved;
    },
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Middleware to set `managedBy` when a campaign is approved
CampaignSchema.pre('save', function (next) {
  if (this.isApproved && !this.managedBy) {
    this.managedBy = this.requestedBy; // Assign organizer as the manager
  }
  next();
});

const Campaign = mongoose.models.campaign || mongoose.model('campaign', CampaignSchema);
export default Campaign;
