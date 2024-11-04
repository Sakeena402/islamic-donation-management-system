'use client';
import React, { useState } from "react";
import GeneralForm from "@/components/forms/GeneralForm";
import axios from "axios";
import AuthLayout from "@/components/AuthLayout";
import { loginSchema } from "@/schemas/validationSchema";
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();

  const onLogin = async (credentials: { email: string; password: string }) => {
    try {
      const response = await axios.post("/api/auth/login", credentials);
      console.log("Login successful");
      // Redirect user after successful login
      router.push("/user/profile"); // or the appropriate route
    } catch (error: any) {
      // Handle different types of errors
      if (error.response) {
        // Server responded with a status code
        switch (error.response.status) {
          case 400:
            // Check if the specific error is due to email or password issues
            if (error.response.data.error === "Email and password are required") {
              setLoginError("Please enter both email and password.");
            } else if (error.response.data.error === "User doesn't exist") {
              setLoginError("No account found with this email. Please sign up.");
            } else if (error.response.data.error === "Invalid password") {
              setLoginError("The password you entered is incorrect. Please try again.");
            } else {
              setLoginError("An error occurred. Please try again.");
            }
            break;
          case 500:
            setLoginError("Server error. Please try again later.");
            break;
          default:
            setLoginError("An unexpected error occurred. Please try again.");
        }
      } else if (error.request) {
        // Request was made but no response received
        setLoginError("No response from the server. Please check your connection.");
      } else {
        // Something else happened in making the request
        setLoginError("An error occurred while logging in. Please try again.");
      }
    }
  };

  return (
    <AuthLayout backgroundImage="https://wallpapers.com/images/hd/1920-x-1080-hd-c65hirjqswhsd1z3.jpg">
      <GeneralForm
        fields={[
          { name: "email", label: "Email", type: "email", required: true },
          { name: "password", label: "Password", type: "password", required: true },
        ]}
        buttonText="Login"
        onSubmit={onLogin}
        validationSchema={loginSchema}
        errorMessage={loginError}
      />
    </AuthLayout>
  );
};

export default LoginPage;

























