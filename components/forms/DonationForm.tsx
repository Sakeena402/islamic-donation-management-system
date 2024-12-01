// 'use client'
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

// type DonationFormData = {
//   amount: number;
//   currency: string;
// };

// const DonationForm: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<DonationFormData>();
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [message, setMessage] = useState('');

//   const onSubmit = async (data: DonationFormData) => {
//     setIsProcessing(true);
//     setMessage('');

//     try {
//       // Send donation data to the backend
//       const response = await axios.post('/api/donation/checkout', {
//         amount: Math.round(data.amount * 100), // Convert to smallest unit (e.g., cents)
//         currency: data.currency,
//       });

//       const clientSecret = response.data.clientSecret;

//       // Load Stripe and confirm payment
//       const stripe = await stripePromise;
//       if (!stripe) throw new Error('Stripe failed to load');

//       const result = await stripe.confirmCardPayment(clientSecret);

//       if (result.error) {
//         setMessage(`Payment failed: ${result.error.message}`);
//       } else if (result.paymentIntent?.status === 'succeeded') {
//         setMessage('Thank you for your donation!');
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage('An error occurred. Please try again.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="donation-form">
//       <h2>Donate Now</h2>

//       <div>
//         <label htmlFor="amount">Donation Amount</label>
//         <input
//           type="number"
//           step="0.01"
//           id="amount"
//           {...register('amount', { required: 'Amount is required', min: 1 })}
//         />
//         {errors.amount && <p>{errors.amount.message}</p>}
//       </div>

//       <div>
//         <label htmlFor="currency">Currency</label>
//         <select id="currency" {...register('currency', { required: 'Currency is required' })}>
//           <option value="usd">USD</option>
//           <option value="eur">EUR</option>
//           <option value="gbp">GBP</option>
//         </select>
//         {errors.currency && <p>{errors.currency.message}</p>}
//       </div>

//       <button type="submit" disabled={isProcessing}>
//         {isProcessing ? 'Processing...' : 'Donate'}
//       </button>

//       {message && <p>{message}</p>}
//     </form>
//   );
// };

// export default DonationForm;
