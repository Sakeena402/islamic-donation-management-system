import { NextRequest, NextResponse } from 'next/server';
import { organizationService } from '@/services/organizationService';
import { getDataFromToken } from '@/helpers/getDataFromToken';

export async function POST(request: NextRequest) {
  try {
    const token = await getDataFromToken(request);
    if (!token || token.role !== 'Admin') {
      return NextResponse.json({ error: 'Only admins can approve organizations' }, { status: 403 });
    }

    const { organizationId, action, reason } = await request.json();

    if (!organizationId || !action) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let organization;

    if (action === 'approve') {
      organization = await organizationService.approveOrganization(organizationId, token.id);
    } else if (action === 'reject') {
      if (!reason) {
        return NextResponse.json({ error: 'Rejection reason is required' }, { status: 400 });
      }
      organization = await organizationService.rejectOrganization(organizationId, reason, token.id);
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    return NextResponse.json(
      { message: `Organization ${action}ed successfully`, data: organization },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to process organization';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const token = await getDataFromToken(request);
    if (!token || token.role !== 'Admin') {
      return NextResponse.json({ error: 'Only admins can view pending organizations' }, { status: 403 });
    }

    const organizations = await organizationService.getOrganizations({ approved: false });
    return NextResponse.json({ data: organizations }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to fetch pending organizations';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
