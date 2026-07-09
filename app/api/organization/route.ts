import { NextRequest, NextResponse } from 'next/server';
import { organizationService } from '@/services/organizationService';
import { getDataFromToken } from '@/helpers/getDataFromToken';

export async function POST(request: NextRequest) {
  try {
    const token = await getDataFromToken(request);
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, description, category, accountHolder, accountNumber, routingNumber, accountType } = await request.json();

    if (!name || !description || !category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const organization = await organizationService.createOrganization({
      name,
      description,
      category,
      head: token.id,
      createdBy: token.id,
      requestedBy: token.role === 'Organizer' ? token.id : undefined,
      accountDetails: {
        accountHolder,
        accountNumber,
        routingNumber,
        accountType,
      },
    });

    return NextResponse.json(
      { message: 'Organization created successfully', data: organization },
      { status: 201 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to create organization';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const approved = searchParams.get('approved');
    const category = searchParams.get('category');

    if (id) {
      const organization = await organizationService.getOrganizationById(id);
      return NextResponse.json({ data: organization }, { status: 200 });
    }

    const organizations = await organizationService.getOrganizations({
      approved: approved === 'true' ? true : approved === 'false' ? false : undefined,
      category: category || undefined,
    });

    return NextResponse.json({ data: organizations }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to fetch organizations';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const token = await getDataFromToken(request);
    if (!token || !['Admin', 'Organizer'].includes(token.role)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id, ...data } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Organization ID is required' }, { status: 400 });
    }

    const organization = await organizationService.updateOrganization(id, data);
    return NextResponse.json(
      { message: 'Organization updated successfully', data: organization },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to update organization';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const token = await getDataFromToken(request);
    if (!token || token.role !== 'Admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Organization ID is required' }, { status: 400 });
    }

    await organizationService.deleteOrganization(id);
    return NextResponse.json({ message: 'Organization deleted successfully' }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to delete organization';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
