/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState,useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from 'axios';
import React from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phoneNo: '',
    address: '',
    password: '',
 
  });
const [buttonDisabled,setButtonDisabled]  = useState(false)
const [loading,setLoading]=useState(false)
const router = useRouter();

useEffect(() => {
  if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
  } else {
      setButtonDisabled(true);
  }
}, [user]);

  const onSignUp = async () => {

    try {
      setLoading(true)
      setButtonDisabled(true)
      const response = await axios.post("/api/auth/signup", user);
      console.log("Signup sucess")
      router.push('/login'); 
    } catch (error:any) {
      console.log("Signup failed", error.message);
      
  
  }finally {
    setTimeout(() => {
      setLoading(false);
      setButtonDisabled(false);
  }, 1000);
  }
 

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Your Account
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
              className="w-full px-3 py-2 mt-1 border text-gray-700 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
              className="w-full px-3 py-2 mt-1  text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              value={user.phoneNo}
              onChange={(e) => setUser({ ...user, phoneNo: e.target.value })}
              required
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              required
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
              className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            />
          </div>
         
          <button
            type="button"
            onClick={onSignUp}
            disabled={buttonDisabled}
            className={`w-full px-4 py-2 font-semibold text-white rounded-md focus:outline-none focus:ring focus:ring-indigo-200 ${
                buttonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
        >
            {loading ? 'Processing...' : 'Sign Up'}
        </button>

        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600 hover:underline">
           Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
