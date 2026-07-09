import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/dbConfig/dbConfig';
import Donation from '@/models/donationModel';
import Campaign from '@/models/campaignModel';
import { PaymentService } from '@/services/paymentService';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-04-10' as any,
});

// Stripe webhook secret from environment
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const sig = request.headers.get('stripe-signature');
    if (!sig) {
      return NextResponse.json(
        { error: 'Missing stripe signature' },
        { status: 400 }
      );
    }

    const body = await request.text();
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } catch (err: unknown) {
      if (err instanceof Error) {
        return NextResponse.json(
          { error: `Webhook Error: ${err.message}` },
          { status: 400 }
        );
      }
      return NextResponse.json(
        { error: 'Invalid webhook signature' },
        { status: 400 }
      );
    }

    // Handle payment_intent.succeeded event
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const { userId, campaignId, transactionId } = paymentIntent.metadata;

      if (!transactionId) {
        return NextResponse.json(
          { error: 'Transaction ID not found in metadata' },
          { status: 400 }
        );
      }

      // Update donation status
      const donation = await Donation.findOneAndUpdate(
        { transactionId },
        { status: 'completed' },
        { new: true }
      );

      // Update campaign collected amount
      if (campaignId && donation) {
        await Campaign.findByIdAndUpdate(
          campaignId,
          { $inc: { collectedAmount: donation.amount } },
          { new: true }
        );
      }

      // Confirm payment in PaymentService
      await PaymentService.confirmPayment(transactionId);

      return NextResponse.json({ success: true, event: event.type });
    }

    // Handle payment_intent.payment_failed event
    if (event.type === 'payment_intent.payment_failed') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const { transactionId } = paymentIntent.metadata;

      if (transactionId) {
        await PaymentService.failPayment(transactionId, 'Payment failed via Stripe');
        await Donation.findOneAndUpdate(
          { transactionId },
          { status: 'failed' }
        );
      }

      return NextResponse.json({ success: true, event: event.type });
    }

    return NextResponse.json({ success: true, event: event.type });
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
