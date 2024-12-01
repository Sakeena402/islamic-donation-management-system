import mongoose, { Types, Document } from 'mongoose';

export interface IOrganization {
  name: string;
  description: string;
  logo?: string; // Optional field for organization logo
  category: 'education' | 'healthcare' | 'environment' | 'others';
  head: Types.ObjectId | string; // User ID of the head (Admin or Organizer)
  organizers: Types.ObjectId[]; // Array of organizer IDs
  accountId: Types.ObjectId | string; // Reference to the organization's account
  createdBy: Types.ObjectId | string; // Admin ID who created the organization
  requestedBy?: Types.ObjectId | string; // Organizer ID who requested it (if applicable)
  approvedBy?: Types.ObjectId | string; // Admin ID who approved the request
  isApproved?: boolean; // Default: true if created by admin, false if requested by an organizer
  campaigns: Types.ObjectId[]; // Array of campaign IDs associated with this organization
  donations: Types.ObjectId[]; // Array of donation IDs associated with this organization
  isActive?: boolean; // Default: true
  reasonForRejection?: string; // Required if `isApproved` is false
  createdAt?: Date;
  updatedAt?: Date;
}

const OrganizationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  logo: { type: String, required: false }, // Optional field for the organization's logo
  category: {
    type: String,
    enum: ['education', 'healthcare', 'environment', 'others'], // Example categories
    required: true,
  },
  head: {
    type: Types.ObjectId,
    ref: 'User', // Reference to the User schema
    required: true,
  },
  organizers: [
    {
      type: Types.ObjectId,
      ref: 'User', // Reference to the User schema
    },
  ],
  accountId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Account', 
    required: true 
  },
  createdBy: {
    type: Types.ObjectId,
    ref: 'User', // Reference to the Admin who created the organization
    required: true,
  },
  requestedBy: {
    type: Types.ObjectId,
    ref: 'User', // Reference to the Organizer who requested the organization
    default: null,
  },
  approvedBy: {
    type: Types.ObjectId,
    ref: 'User', // Admin who approved the organization
    default: null,
  },
  isApproved: {
    type: Boolean,
    default: function () {
      return this.requestedBy === null; // Automatically true if created by Admin
    },
  },
  campaigns: [
    {
      type: Types.ObjectId,
      ref: 'Campaign', // Reference to associated campaigns
    },
  ],
  donations: [
    {
      type: Types.ObjectId,
      ref: 'Donation', // Reference to associated donations
    },
  ],
  isActive: { type: Boolean, default: true },
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

// Middleware to set the `head` to admin if no organizer is specified
OrganizationSchema.pre('save', function (next) {
  if (!this.head) {
    this.head = this.createdBy; // Default to admin as the head
  }
  next();
});

const Organization = mongoose.models.organization || mongoose.model('organization', OrganizationSchema);
export default Organization;
