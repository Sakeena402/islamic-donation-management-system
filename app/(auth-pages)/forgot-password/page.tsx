'use client';

import React, { useState } from "react";
import axios from "axios";
import AuthLayout from "@/components/layout/AuthLayout";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    if (!email) {
      setError("Please enter your email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/auth/forgot-password", {
        email,
      });
      setMessage(
        response.data.message ||
          "If an account with that email exists, a password reset link has been sent."
      );
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(
          err.response.data?.error || "Something went wrong. Please try again."
        );
      } else {
        setError("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-lg space-y-3">
        <h2 className="text-2xl font-light text-center text-gray-800 mb-2">
          Reset Your Password
        </h2>
        <p className="text-sm text-center text-gray-600 mb-4">
          Enter the email address associated with your account and we will send
          you a link to reset your password.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          {error && <p className="text-center text-red-600">{error}</p>}
          {message && (
            <p className="text-center text-green-600">{message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 font-semibold text-white rounded-md focus:outline-none ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Remember your password?{" "}
          <Link href="/login" className="text-indigo-600 hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
