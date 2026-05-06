"use client";

import Link from "next/link";
import AuthLayout from "@/components/layout/AuthLayout";

export default function VerifyNotificationPage() {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center w-full py-8">
        <h1 className="text-3xl font-light mb-4 text-gray-800">
          Check Your Email
        </h1>
        <p className="text-gray-600 text-center mb-6 max-w-md">
          We have sent a verification link to your email address. Please check
          your inbox and follow the link to verify your email before logging in.
        </p>
        <Link
          href="/login"
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold transition-colors"
        >
          Go to Login
        </Link>
      </div>
    </AuthLayout>
  );
}
