// import { NextApiRequest, NextApiResponse } from 'next';
// import Stripe from 'stripe';
// import { PrismaClient } from '@prisma/client'; // Assuming you are using Prisma

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2022-11-15' });
// const prisma = new PrismaClient();

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { amount, type, paymentMethod, userID } = req.body;

//     try {
//       // Create Stripe payment intent
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: amount * 100, // Convert amount to cents
//         currency: 'usd',
//         payment_method_types: ['card'],
//       });

//       // Save donation in the database
//       const donation = await prisma.donation.create({
//         data: {
//           Amount: amount,
//           Type: type,
//           PaymentMethod: paymentMethod,
//           Date: Math.floor(Date.now() / 1000),
//           UserID: userID,
//           PaymentStatus: 'Pending',
//         },
//       });

//       res.status(200).json({ success: true, clientSecret: paymentIntent.client_secret, donation });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
