import { NextRequest, NextResponse } from 'next/server';
import { organizationService } from '@/services/organizationService';
import { getDataFromToken } from '@/helpers/getDataFromToken';

export async function POST(request: NextRequest) {
  try {
    const token = await getDataFromToken(request);
    if (!token || !['Admin', 'Organizer'].includes(token.role)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { organizationId, userId, action } = await request.json();

    if (!organizationId || !userId || !action) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let organization;

    if (action === 'add') {
      organization = await organizationService.addOrganizerToOrganization(organizationId, userId);
    } else if (action === 'remove') {
      organization = await organizationService.removeOrganizerFromOrganization(organizationId, userId);
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    return NextResponse.json(
      { message: `Member ${action === 'add' ? 'added' : 'removed'} successfully`, data: organization },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to manage member';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
