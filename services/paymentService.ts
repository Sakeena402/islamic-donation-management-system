import PaymentTransaction from '@/models/paymentTransactionModel';
import PaymentGateway from '@/models/paymentGateway';
import Donation from '@/models/donationModel';
import { Types } from 'mongoose';

export class PaymentService {
  // Create a new payment transaction
  static async createPaymentTransaction(data: {
    donorId: string | Types.ObjectId;
    campaignId: string | Types.ObjectId;
    amount: number;
    paymentGatewayId: string | Types.ObjectId;
    transactionId: string;
    paymentMethod: string;
    isRecurring?: boolean;
  }) {
    try {
      const transaction = new PaymentTransaction({
        ...data,
        status: 'pending',
        donationDate: new Date(),
      });
      await transaction.save();
      return transaction;
    } catch (error) {
      throw new Error(`Failed to create payment transaction: ${error}`);
    }
  }

  // Get payment transaction by ID
  static async getTransactionById(transactionId: string) {
    try {
      return await PaymentTransaction.findById(transactionId)
        .populate('donorId')
        .populate('campaignId')
        .populate('paymentGatewayId');
    } catch (error) {
      throw new Error(`Failed to fetch transaction: ${error}`);
    }
  }

  // Update transaction status
  static async updateTransactionStatus(
    transactionId: string,
    status: 'pending' | 'completed' | 'failed'
  ) {
    try {
      const transaction = await PaymentTransaction.findByIdAndUpdate(
        transactionId,
        { status },
        { new: true }
      );
      return transaction;
    } catch (error) {
      throw new Error(`Failed to update transaction status: ${error}`);
    }
  }

  // Get transactions by donor
  static async getTransactionsByDonor(donorId: string | Types.ObjectId) {
    try {
      return await PaymentTransaction.find({ donorId })
        .populate('campaignId')
        .sort({ donationDate: -1 });
    } catch (error) {
      throw new Error(`Failed to fetch donor transactions: ${error}`);
    }
  }

  // Get transactions by campaign
  static async getTransactionsByCampaign(campaignId: string | Types.ObjectId) {
    try {
      return await PaymentTransaction.find({ campaignId })
        .populate('donorId')
        .sort({ donationDate: -1 });
    } catch (error) {
      throw new Error(`Failed to fetch campaign transactions: ${error}`);
    }
  }

  // Get active payment gateways
  static async getActiveGateways() {
    try {
      return await PaymentGateway.find({ isActive: true });
    } catch (error) {
      throw new Error(`Failed to fetch payment gateways: ${error}`);
    }
  }

  // Get payment gateway by ID
  static async getGatewayById(gatewayId: string | Types.ObjectId) {
    try {
      return await PaymentGateway.findById(gatewayId);
    } catch (error) {
      throw new Error(`Failed to fetch payment gateway: ${error}`);
    }
  }

  // Confirm payment (webhook handler)
  static async confirmPayment(transactionId: string) {
    try {
      const transaction = await this.updateTransactionStatus(transactionId, 'completed');
      
      if (transaction && transaction.campaignId) {
        await Donation.updateOne(
          { transactionId },
          { status: 'completed' }
        );
      }
      
      return transaction;
    } catch (error) {
      throw new Error(`Failed to confirm payment: ${error}`);
    }
  }

  // Fail payment
  static async failPayment(transactionId: string, reason: string) {
    try {
      const transaction = await this.updateTransactionStatus(transactionId, 'failed');
      
      if (transaction && transaction.campaignId) {
        await Donation.updateOne(
          { transactionId },
          { status: 'failed' }
        );
      }
      
      return transaction;
    } catch (error) {
      throw new Error(`Failed to mark payment as failed: ${error}`);
    }
  }

  // Retry payment
  static async retryPayment(transactionId: string) {
    try {
      return await this.updateTransactionStatus(transactionId, 'pending');
    } catch (error) {
      throw new Error(`Failed to retry payment: ${error}`);
    }
  }

  // Delete transaction
  static async deleteTransaction(transactionId: string) {
    try {
      return await PaymentTransaction.findByIdAndDelete(transactionId);
    } catch (error) {
      throw new Error(`Failed to delete transaction: ${error}`);
    }
  }
}
