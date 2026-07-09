'use client';

import React, { useState } from "react";
import GeneralForm from "@/components/forms/GeneralForm";
import axios from "axios";
import AuthLayout from "@/components/layout/AuthLayout";
import { signupSchema } from "@/schemas/validationSchema";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [signupError, setSignupError] = useState<string | null>(null);
  const router = useRouter();

  const onSignUp = async (user: {
    username: string;
    email: string;
    phoneNo: string;
    address: string;
    password: string;
  }) => {
    try {
      setSignupError(null);
      await axios.post("/api/auth/signup", user);
      router.push("/verify-notification");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        switch (error.response.status) {
          case 400:
            setSignupError(
              "All fields are required. Please fill in all fields."
            );
            break;
          case 409:
            setSignupError(
              "A user with this email already exists. Please use a different email."
            );
            break;
          case 500:
            setSignupError("Server error. Please try again later.");
            break;
          default:
            setSignupError(
              "An unexpected error occurred. Please try again."
            );
        }
      } else {
        setSignupError(
          "An error occurred while signing up. Please try again."
        );
      }
    }
  };

  return (
    <AuthLayout>
      <GeneralForm
        fields={[
          {
            name: "username",
            label: "Full Name",
            type: "text",
            required: true,
          },
          {
            name: "email",
            label: "Email",
            type: "email",
            required: true,
          },
          {
            name: "phoneNo",
            label: "Phone Number",
            type: "text",
            required: true,
          },
          {
            name: "address",
            label: "Address",
            type: "text",
            required: true,
          },
          {
            name: "password",
            label: "Password",
            type: "password",
            required: true,
          },
        ]}
        buttonText="Create Your Account"
        onSubmit={onSignUp}
        validationSchema={signupSchema}
        errorMessage={signupError}
      />
    </AuthLayout>
  );
};

export default SignupPage;
