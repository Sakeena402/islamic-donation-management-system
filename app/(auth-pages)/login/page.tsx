'use client';

import React, { useState } from "react";
import GeneralForm from "@/components/forms/GeneralForm";
import axios from "axios";
import AuthLayout from "@/components/layout/AuthLayout";
import { loginSchema } from "@/schemas/validationSchema";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();

  const onLogin = async (credentials: {
    email: string;
    password: string;
  }) => {
    try {
      setLoginError(null);
      await axios.post("/api/auth/login", credentials);

      // Fetch user details after login
      const userResponse = await axios.get("/api/auth/me", {
        withCredentials: true,
      });

      const { role } = userResponse.data;

      // Redirect based on role
      if (role === "Donor" || role === "Admin") {
        router.push("/profile");
      } else if (role === "Organizer") {
        router.push("/organizer");
      } else {
        router.push("/profile");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        const serverError = error.response.data?.error;
        switch (error.response.status) {
          case 400:
            if (serverError === "Email and password are required") {
              setLoginError("Please enter both email and password.");
            } else if (serverError === "User doesn't exist") {
              setLoginError(
                "No account found with this email. Please sign up."
              );
            } else if (serverError === "Invalid password") {
              setLoginError(
                "The password you entered is incorrect. Please try again."
              );
            } else {
              setLoginError("An error occurred. Please try again.");
            }
            break;
          case 401:
            setLoginError("Please verify your email to log in.");
            break;
          case 500:
            setLoginError("Server error. Please try again later.");
            break;
          default:
            setLoginError(
              "An unexpected error occurred. Please try again."
            );
        }
      } else {
        setLoginError(
          "An error occurred while logging in. Please try again."
        );
      }
    }
  };

  return (
    <AuthLayout>
      <GeneralForm
        fields={[
          {
            name: "email",
            label: "Email",
            type: "email",
            required: true,
          },
          {
            name: "password",
            label: "Password",
            type: "password",
            required: true,
          },
        ]}
        buttonText="Login"
        onSubmit={onLogin}
        validationSchema={loginSchema}
        errorMessage={loginError}
      />
      <p className="mt-4 text-sm text-center text-gray-600">
        <Link
          href="/forgot-password"
          className="text-indigo-600 hover:underline"
        >
          Forgot your password?
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
