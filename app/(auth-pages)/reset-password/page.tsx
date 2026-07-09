'use client';

import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthLayout from "@/components/layout/AuthLayout";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ResetPasswordPage = () => {
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Extract token from URL on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get("token");
    if (urlToken) {
      setToken(urlToken);
    } else {
      setError("No reset token found. Please request a new password reset link.");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    if (!newPassword || !confirmPassword) {
      setError("Please fill in both password fields.");
      setLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/auth/reset-password", {
        token,
        newPassword,
      });
      setMessage(response.data.message || "Password reset successfully!");
      // Redirect to login after a short delay
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(
          err.response.data?.error ||
            "Something went wrong. Please try again."
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
          Set New Password
        </h2>
        <p className="text-sm text-center text-gray-600 mb-4">
          Enter your new password below.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              placeholder="Enter new password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-2/3 right-4 -translate-y-1/2 text-gray-400"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              placeholder="Confirm new password"
            />
          </div>

          {error && <p className="text-center text-red-600">{error}</p>}
          {message && (
            <p className="text-center text-green-600">{message}</p>
          )}

          <button
            type="submit"
            disabled={loading || !token}
            className={`w-full px-4 py-2 font-semibold text-white rounded-md focus:outline-none ${
              loading || !token
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          <Link href="/login" className="text-indigo-600 hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
