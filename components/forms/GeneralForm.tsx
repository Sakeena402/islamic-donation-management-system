
'use client'
// GeneralForm.tsx
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/forms/SubmitButton";

interface Field {
  name: string;
  label: string;
  type: string;
  required?: boolean;
}

interface GeneralFormProps {
  fields: Field[];
  buttonText: string;
  onSubmit: (formData: { [key: string]: string }) => Promise<void>;
  redirectPath: string;
}

const GeneralForm: React.FC<GeneralFormProps> = ({
  fields,
  buttonText,
  onSubmit,
  redirectPath,
}) => {
  const router = useRouter();
  const [formData, setFormData] = useState<{ [key: string]: string }>(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      await onSubmit(formData);
      router.push(redirectPath);
    } catch (error) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">{buttonText}</h2>
        {error && <p className="text-center text-red-600">{error}</p>}
        <form className="space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                className="w-full px-3 py-2 mt-1 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              />
            </div>
          ))}
          <SubmitButton
            loading={loading}
            text={buttonText}
            onClick={handleSubmit}
          />
        </form>
        {buttonText === "Create Your Account" && (
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Login
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default GeneralForm;


















































// // app/signup/components/SignupForm.tsx
// 'use client';

// import React, { useState, useEffect } from "react";

// interface User {
//   username: string;
//   email: string;
//   phoneNo: string;
//   address: string;
//   password: string;
// }

// interface SignupFormProps {
//   onSubmit: (user: User) => Promise<void>;
// }

// const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
//   const [user, setUser] = useState<User>({
//     username: '',
//     email: '',
//     phoneNo: '',
//     address: '',
//     password: '',
//   });

//   const [buttonDisabled, setButtonDisabled] = useState(true);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const { email, password, username } = user;
//     setButtonDisabled(!(email && password && username));
//   }, [user]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true); // Start loading
//     await onSubmit(user); // Call onSubmit and wait for it to complete
//     setLoading(false); // End loading
//   };

//   return (
//     <form className="space-y-6" onSubmit={handleSubmit}>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Full Name</label>
//         <input
//           type="text"
//           value={user.username}
//           onChange={(e) => setUser({ ...user, username: e.target.value })}
//           required
//           className="w-full px-3 py-2 mt-1 border text-gray-700 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Email</label>
//         <input
//           type="email"
//           value={user.email}
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//           required
//           className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//         <input
//           type="text"
//           value={user.phoneNo}
//           onChange={(e) => setUser({ ...user, phoneNo: e.target.value })}
//           required
//           className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Address</label>
//         <input
//           type="text"
//           value={user.address}
//           onChange={(e) => setUser({ ...user, address: e.target.value })}
//           required
//           className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Password</label>
//         <input
//           type="password"
//           value={user.password}
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//           required
//           className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={buttonDisabled || loading}
//         className={`w-full px-4 py-2 font-semibold text-white rounded-md focus:outline-none focus:ring focus:ring-indigo-200 ${
//           buttonDisabled || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
//         }`}
//       >
//         {loading ? "Submitting..." : "Sign Up"}
//       </button>
//     </form>
//   );
// };

// export default SignupForm;

