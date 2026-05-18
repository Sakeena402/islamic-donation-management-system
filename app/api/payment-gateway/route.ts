import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/dbConfig/dbConfig';
import { getDataFromToken } from '@/helpers/getDataFromToken';
import PaymentGateway from '@/models/paymentGateway';
import User from '@/models/userModel';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const userId = getDataFromToken(request);

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = await User.findById(userId);
    if (!user || user.role !== 'Admin') {
      return NextResponse.json(
        { error: 'Only admins can create payment gateways' },
        { status: 403 }
      );
    }

    const { name, provider, clientSecret, publicKey, isActive } = await request.json();

    if (!name || !provider || !clientSecret || !publicKey) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const gateway = new PaymentGateway({
      name,
      provider,
      clientSecret,
      publicKey,
      isActive: isActive !== false,
    });

    await gateway.save();

    return NextResponse.json(
      { success: true, gateway },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const active = searchParams.get('active');

    let query = {};
    if (active === 'true') {
      query = { isActive: true };
    }

    const gateways = await PaymentGateway.find(query).select('-clientSecret');
    return NextResponse.json({ gateways });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    await connectDB();
    const userId = getDataFromToken(request);

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = await User.findById(userId);
    if (!user || user.role !== 'Admin') {
      return NextResponse.json(
        { error: 'Only admins can update payment gateways' },
        { status: 403 }
      );
    }

    const { gatewayId, isActive, name, publicKey } = await request.json();

    if (!gatewayId) {
      return NextResponse.json(
        { error: 'Gateway ID is required' },
        { status: 400 }
      );
    }

    const updateData: any = {};
    if (isActive !== undefined) updateData.isActive = isActive;
    if (name) updateData.name = name;
    if (publicKey) updateData.publicKey = publicKey;

    const gateway = await PaymentGateway.findByIdAndUpdate(
      gatewayId,
      updateData,
      { new: true }
    ).select('-clientSecret');

    return NextResponse.json({ success: true, gateway });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await connectDB();
    const userId = getDataFromToken(request);

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = await User.findById(userId);
    if (!user || user.role !== 'Admin') {
      return NextResponse.json(
        { error: 'Only admins can delete payment gateways' },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(request.url);
    const gatewayId = searchParams.get('gatewayId');

    if (!gatewayId) {
      return NextResponse.json(
        { error: 'Gateway ID is required' },
        { status: 400 }
      );
    }

    await PaymentGateway.findByIdAndDelete(gatewayId);

    return NextResponse.json({ success: true, message: 'Gateway deleted' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
