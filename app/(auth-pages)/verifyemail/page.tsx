"use client";

import axios from "axios";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/layout/AuthLayout";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Function to verify the user's email
  const verifyUserEmail = useCallback(async (verifyToken: string) => {
    setLoading(true);
    setError(false);
    try {
      await axios.post("/api/auth/verifyemail", { token: verifyToken });
      setVerified(true);
      // Auto-redirect to login after 3 seconds
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (err: unknown) {
      setError(true);
      if (axios.isAxiosError(err) && err.response) {
        setErrorMessage(
          err.response.data?.error || "Verification failed. The token may be invalid or expired."
        );
      } else {
        setErrorMessage("An error occurred during verification. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }, [router]);

  // Extract token from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get("token");
    if (urlToken) {
      setToken(urlToken);
    }
  }, []);

  // Trigger verification when the token is set
  useEffect(() => {
    if (token) {
      verifyUserEmail(token);
    }
  }, [token, verifyUserEmail]);

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center w-full py-8">
        <h1 className="text-3xl font-light mb-4 text-gray-800">
          Email Verification
        </h1>

        {loading && (
          <div className="text-center">
            <p className="text-lg text-indigo-600">
              Verifying your email, please wait...
            </p>
          </div>
        )}

        {verified && (
          <div className="mt-4 text-center">
            <h2 className="text-xl text-green-600 font-semibold">
              Email Verified Successfully!
            </h2>
            <p className="mt-2 text-gray-600">
              Your email has been verified. You will be redirected to the login
              page shortly.
            </p>
            <Link
              href="/login"
              className="mt-4 inline-block text-indigo-600 hover:underline"
            >
              Go to Login
            </Link>
          </div>
        )}

        {error && !loading && (
          <div className="mt-4 text-center">
            <h2 className="text-xl text-red-600 font-semibold">
              Verification Failed
            </h2>
            <p className="mt-2 text-gray-600">{errorMessage}</p>
            <Link
              href="/login"
              className="mt-4 inline-block text-indigo-600 hover:underline"
            >
              Go to Login
            </Link>
          </div>
        )}

        {!token && !loading && (
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              No verification token found. Please check your email for the
              verification link.
            </p>
          </div>
        )}
      </div>
    </AuthLayout>
  );
}
