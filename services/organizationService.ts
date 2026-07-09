import connectDB from '@/dbConfig/dbConfig';
import Organization from '@/models/organizationModel';
import Account from '@/models/accountModel';

export const organizationService = {
  async createOrganization(data: {
    name: string;
    description: string;
    category: 'education' | 'healthcare' | 'environment' | 'others';
    head: string;
    createdBy: string;
    requestedBy?: string;
    accountDetails?: any;
  }) {
    try {
      await connectDB();

      // Check if organization name already exists
      const existing = await Organization.findOne({ name: data.name });
      if (existing) {
        throw new Error('Organization name already exists');
      }

      // Create bank account for organization
      let accountId;
      if (data.accountDetails) {
        const account = await Account.create({
          type: 'organization',
          organizationId: null, // Will be set after org creation
          accountDetails: {
            accountHolder: data.accountDetails.accountHolder,
            accountNumber: data.accountDetails.accountNumber,
            routingNumber: data.accountDetails.routingNumber,
            accountType: data.accountDetails.accountType || 'checking',
          },
          status: 'active',
        });
        accountId = account._id;
      }

      // Create organization
      const organization = await Organization.create({
        name: data.name,
        description: data.description,
        category: data.category,
        head: data.head || data.createdBy,
        createdBy: data.createdBy,
        requestedBy: data.requestedBy || null,
        accountId: accountId || null,
        isApproved: !data.requestedBy, // Auto-approve if created by admin
        organizers: [data.head || data.createdBy],
      });

      // Update account's organizationId
      if (accountId) {
        await Account.findByIdAndUpdate(accountId, {
          organizationId: organization._id,
        });
      }

      return organization.populate(['head', 'createdBy', 'organizers']);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Organization creation failed: ${error.message}`);
      }
      throw new Error('Organization creation failed');
    }
  },

  async getOrganizationById(id: string) {
    try {
      await connectDB();
      const organization = await Organization.findById(id).populate([
        'head',
        'createdBy',
        'organizers',
        'campaigns',
        'donations',
        'accountId',
      ]);

      if (!organization) {
        throw new Error('Organization not found');
      }

      return organization;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch organization: ${error.message}`);
      }
      throw new Error('Failed to fetch organization');
    }
  },

  async getOrganizations(filters?: { approved?: boolean; category?: string }) {
    try {
      await connectDB();

      const query: any = {};
      if (filters?.approved !== undefined) {
        query.isApproved = filters.approved;
      }
      if (filters?.category) {
        query.category = filters.category;
      }

      const organizations = await Organization.find(query)
        .populate(['head', 'createdBy', 'organizers'])
        .sort({ createdAt: -1 });

      return organizations;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch organizations: ${error.message}`);
      }
      throw new Error('Failed to fetch organizations');
    }
  },

  async updateOrganization(id: string, data: Partial<any>) {
    try {
      await connectDB();

      const organization = await Organization.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      }).populate(['head', 'createdBy', 'organizers']);

      if (!organization) {
        throw new Error('Organization not found');
      }

      return organization;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Organization update failed: ${error.message}`);
      }
      throw new Error('Organization update failed');
    }
  },

  async approveOrganization(id: string, approvedBy: string) {
    try {
      await connectDB();

      const organization = await Organization.findByIdAndUpdate(
        id,
        {
          isApproved: true,
          approvedBy,
        },
        { new: true }
      ).populate(['head', 'createdBy', 'organizers']);

      if (!organization) {
        throw new Error('Organization not found');
      }

      return organization;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Organization approval failed: ${error.message}`);
      }
      throw new Error('Organization approval failed');
    }
  },

  async rejectOrganization(id: string, reason: string, rejectedBy: string) {
    try {
      await connectDB();

      const organization = await Organization.findByIdAndUpdate(
        id,
        {
          isApproved: false,
          reasonForRejection: reason,
          approvedBy: rejectedBy,
        },
        { new: true }
      ).populate(['head', 'createdBy', 'organizers']);

      if (!organization) {
        throw new Error('Organization not found');
      }

      return organization;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Organization rejection failed: ${error.message}`);
      }
      throw new Error('Organization rejection failed');
    }
  },

  async addOrganizerToOrganization(orgId: string, organizerId: string) {
    try {
      await connectDB();

      const organization = await Organization.findByIdAndUpdate(
        orgId,
        { $addToSet: { organizers: organizerId } },
        { new: true }
      ).populate(['head', 'organizers']);

      if (!organization) {
        throw new Error('Organization not found');
      }

      return organization;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to add organizer: ${error.message}`);
      }
      throw new Error('Failed to add organizer');
    }
  },

  async removeOrganizerFromOrganization(orgId: string, organizerId: string) {
    try {
      await connectDB();

      const organization = await Organization.findByIdAndUpdate(
        orgId,
        { $pull: { organizers: organizerId } },
        { new: true }
      ).populate(['head', 'organizers']);

      if (!organization) {
        throw new Error('Organization not found');
      }

      return organization;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to remove organizer: ${error.message}`);
      }
      throw new Error('Failed to remove organizer');
    }
  },

  async deleteOrganization(id: string) {
    try {
      await connectDB();

      const organization = await Organization.findByIdAndDelete(id);

      if (!organization) {
        throw new Error('Organization not found');
      }

      // Delete associated account if exists
      if (organization.accountId) {
        await Account.findByIdAndDelete(organization.accountId);
      }

      return organization;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Organization deletion failed: ${error.message}`);
      }
      throw new Error('Organization deletion failed');
    }
  },
};
