// import type { NextApiRequest, NextApiResponse } from 'next';
// import Stripe from 'stripe';

// // Initialize Stripe with your secret key
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
//   apiVersion: '2022-11-15',
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     res.setHeader('Allow', 'POST');
//     return res.status(405).end('Method Not Allowed');
//   }

//   try {
//     const { amount, currency } = req.body;

//     if (!amount || !currency) {
//       return res.status(400).json({ error: 'Invalid request payload' });
//     }

//     // Create a PaymentIntent
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount, // Amount in the smallest unit of the currency (e.g., cents for USD)
//       currency,
//       payment_method_types: ['card'],
//     });

//     res.status(200).json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
