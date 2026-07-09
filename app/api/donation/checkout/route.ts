import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/dbConfig/dbConfig';
import { getDataFromToken } from '@/helpers/getDataFromToken';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const userId = getDataFromToken(request);

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized - please log in' },
        { status: 401 }
      );
    }

    const { amount, campaignId, paymentMethod } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid donation amount' },
        { status: 400 }
      );
    }

    if (!paymentMethod) {
      return NextResponse.json(
        { error: 'Payment method is required' },
        { status: 400 }
      );
    }

    // Generate a unique transaction ID
    const transactionId = `txn_${uuidv4()}`;

    // For Stripe payments, create a PaymentIntent
    if (paymentMethod === 'Stripe') {
      try {
        const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
        
        const paymentIntent = await stripe.paymentIntents.create({
          amount: Math.round(amount * 100), // Convert to cents
          currency: 'usd',
          metadata: {
            userId,
            campaignId,
            transactionId,
          },
        });

        return NextResponse.json(
          {
            success: true,
            transactionId,
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id,
          },
          { status: 200 }
        );
      } catch (error: unknown) {
        if (error instanceof Error) {
          return NextResponse.json(
            { error: `Stripe error: ${error.message}` },
            { status: 500 }
          );
        }
        return NextResponse.json(
          { error: 'Failed to create payment intent' },
          { status: 500 }
        );
      }
    }

    // For non-Stripe methods, return transaction ID for manual processing
    return NextResponse.json(
      {
        success: true,
        transactionId,
        message: `Please complete payment via ${paymentMethod}. Transaction ID: ${transactionId}`,
      },
      { status: 200 }
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
