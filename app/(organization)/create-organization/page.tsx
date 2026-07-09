'use client';

import { useUser } from '@/context/userContext';
import { OrganizationForm } from '@/components/forms/OrganizationForm';

export default function CreateOrganizationPage() {
  const { user, isAuthenticated } = useUser();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Please Log In</h1>
          <p className="text-gray-600">You need to be logged in to create an organization.</p>
        </div>
      </div>
    );
  }

  if (user?.role === 'Donor') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
          <p className="text-gray-600">Only organizers and admins can create organizations.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Organization</h1>
          <p className="text-gray-600">
            {user?.role === 'Admin'
              ? 'Create a new organization for your platform.'
              : 'Request a new organization. An admin will review your request.'}
          </p>
        </div>
        <OrganizationForm />
      </div>
    </div>
  );
}
