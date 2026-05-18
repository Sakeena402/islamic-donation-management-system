import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/dbConfig/dbConfig';
import { getDataFromToken } from '@/helpers/getDataFromToken';
import Donation from '@/models/donationModel';
import { PaymentService } from '@/services/paymentService';

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

    const { transactionId } = await request.json();

    if (!transactionId) {
      return NextResponse.json(
        { error: 'Transaction ID is required' },
        { status: 400 }
      );
    }

    // Check if donation belongs to user
    const donation = await Donation.findOne({ transactionId, donorId: userId });
    if (!donation) {
      return NextResponse.json(
        { error: 'Donation not found' },
        { status: 404 }
      );
    }

    // Retry payment by setting status back to pending
    const updatedTransaction = await PaymentService.retryPayment(transactionId);
    await Donation.findOneAndUpdate(
      { transactionId },
      { status: 'pending' }
    );

    return NextResponse.json({
      success: true,
      message: 'Payment retry initiated',
      transaction: updatedTransaction,
    });
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
