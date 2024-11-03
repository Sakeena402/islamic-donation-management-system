
// app/login/page.tsx
'use client'
import React from "react";
import GeneralForm from "@/components/forms/GeneralForm";
import axios from "axios";
import router from "next/router";

const LoginPage = () => {

  
  const onLogIn = async (user: { email: string; password: string }) => {
    try {
      
      const response = await axios.post("/api/auth/login", user);
      console.log("Login sucess")
      router.push('/user/profile'); 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.log("Login failed", error.message);
      
  
  
  }
 
  };


  return (
      <GeneralForm
      fields={[
        { name: "email", label: "Email", type: "email", required: true },
        { name: "password", label: "Password", type: "password", required: true },
      ]}
      buttonText="Login"
      onSubmit={onLogIn}
      redirectPath="/user/profile" // Redirect after successful login
    />
    
    
    
  );
};

export default LoginPage;





























// /* eslint-disable @typescript-eslint/no-unused-vars */
// 'use client'
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import axios from 'axios';
// import React from "react";


// const Login = () => {
//   const [user, setUser] = useState({
//     email: '',
//    password: '',
  
//   });
//   const [buttonDisabled,setButtonDisabled]=useState(true);
//   const [loading,setLoading]=useState(false);
//   const router = useRouter();
//   useEffect(()=>{
//     if(user.email.length>0 && user.password.length >0){
//       setButtonDisabled(false)
//     }else{
//       setButtonDisabled(true)
//     }
//   },[user])


//   const onLogIn = async () => {
//     try {
      
//     } catch (error) {
      
//     }try {
//       setLoading(true)
//       setButtonDisabled(true)
//       const response = await axios.post("/api/auth/login", user);
//       console.log("Login sucess")
//       router.push('/user/profile'); 
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error:any) {
//       console.log("Login failed", error.message);
      
  
//   }finally {
//     setTimeout(() => {
//       setLoading(false);
//       setButtonDisabled(false);
//   }, 1000);
//   }
 
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-800">
//           Login to Your Account
//         </h2>
//         <form  className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//             type="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//             required
//             className="w-full px-3 py-2 mt-1  text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//          />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//                type="password"
//                value={user.password}
//                onChange={(e) => setUser({ ...user, password: e.target.value })}
//                required
//                className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//               />
//           </div>
//           <button
//             type="button"
//             onClick={onLogIn}
//             disabled={buttonDisabled}
//             className={`w-full px-4 py-2 font-semibold text-white rounded-md focus:outline-none focus:ring focus:ring-indigo-200 ${
//                 buttonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
//             }`}
//         >
//             {loading ? 'Processing...' : 'Login'}
//         </button>


//         </form>
//         <p className="text-sm text-center text-gray-600">
//           Don&apos;t have an account?{" "}
//           <Link href="/signup" className="text-indigo-600 hover:underline">
//            Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;







