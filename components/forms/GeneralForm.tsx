// // components/forms/GeneralForm.tsx
// 'use client'
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import SubmitButton from "@/components/forms/SubmitButton";
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import { IconContext } from "react-icons";
// import useFormValidation from "@/hooks/useFormValidation";
// import { AnyObjectSchema } from "yup";

// interface Field {
//   name: string;
//   label: string;
//   type: string;
//   required?: boolean;
// }

// interface GeneralFormProps {
//   fields: Field[];
//   buttonText: string;
//   onSubmit: (formData: { [key: string]: string }) => Promise<void>;
//   validationSchema: AnyObjectSchema; 
//   errorMessage?: string|null // Prop for displaying error messages
// }

// const GeneralForm: React.FC<GeneralFormProps> = ({
//   fields,
//   buttonText,
//   onSubmit,
//   validationSchema,
//   errorMessage, // Accept error message
// }) => {
//   const router = useRouter();
//   const [formData, setFormData] = useState<{ [key: string]: string }>(
//     fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
//   );
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const { errors, validate } = useFormValidation(validationSchema);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     const isValid = await validate(formData);
//     if (!isValid) {
//       setLoading(false);
//       return;
//     }

//     try {
//       await onSubmit(formData);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   return (
//     <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md">
//       <h2 className="text-2xl font-bold text-center text-gray-800">{buttonText}</h2>

//       <form className="space-y-4" onSubmit={handleSubmit}>
//         {fields.map((field) => (
//           <div key={field.name} className="relative">
//             <label className="block text-sm font-medium text-gray-700">{field.label}</label>
//             <input
//               type={field.type === "password" && showPassword ? "text" : field.type}
//               name={field.name}
//               value={formData[field.name]}
//               onChange={handleChange}
//               required={field.required}
//               className={`w-full px-3 py-2 mt-1 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500 ${
//                 errors[field.name] ? "border-red-600" : ""
//               }`}
//               placeholder={`Enter your ${field.label.toLowerCase()}`}
//             />
//             {errors[field.name] && (
//               <p className="text-sm text-red-600">{errors[field.name]}</p>
//             )}
//             {field.type === "password" && (
//               <IconContext.Provider value={{ className: "absolute top-2/3 right-7 transform -translate-y-1/2 text-gray-400" }}>
//                 <button type="button" onClick={togglePasswordVisibility} aria-label="Toggle password visibility">
//                   {showPassword ? <FiEyeOff /> : <FiEye />}
//                 </button>
//               </IconContext.Provider>
//             )}
//           </div>
//         ))}
//         <div>      {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}</div>
//         <SubmitButton loading={loading} text={buttonText} onClick={handleSubmit} />
//       </form>
//       <p className="text-sm text-center text-gray-600">
//         {buttonText === "Create Your Account" ? (
//           <>
//             Already have an account?{" "}
//             <a href="/login" className="text-indigo-600 hover:underline">Login</a>
//           </>
//         ) : (
//           <>
//             Don't have an account?{" "}
//             <a href="/signup" className="text-indigo-600 hover:underline">Sign Up</a>
//           </>
//         )}
//       </p>
//     </div>
//   );
// };

// export default GeneralForm;








































'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/forms/SubmitButton";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IconContext } from "react-icons";
import useFormValidation from "@/hooks/useFormValidation";
import { AnyObjectSchema } from "yup";

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
  validationSchema: AnyObjectSchema;
  errorMessage?: string | null;
}

const GeneralForm: React.FC<GeneralFormProps> = ({
  fields,
  buttonText,
  onSubmit,
  validationSchema,
  errorMessage,
}) => {
  const router = useRouter();
  const [formData, setFormData] = useState<{ [key: string]: string }>(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { errors, validate } = useFormValidation(validationSchema);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const isValid = await validate(formData);
    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      await onSubmit(formData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full max-w-lg space-y-3`">
      {/* Form Heading */}
      <h2 className="text-2xl font-light text-center text-gray-800 mb-2">{buttonText}</h2>

      {/* Form Start */}
      <form className="space-y-2" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} className="relative">
            {/* Input Label */}
            <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
            {/* Input Field */}
            <input
              type={field.type === "password" && showPassword ? "text" : field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              className={`w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500 ${
                errors[field.name] ? "border-red-600" : ""
              }`}
              placeholder={`Enter ${field.label.toLowerCase()}`}
            />
            {/* Error Message */}
            {errors[field.name] && (
              <p className="text-sm text-red-600 mt-1">{errors[field.name]}</p>
            )}
            {/* Password Toggle Icon */}
            {field.type === "password" && (
              <IconContext.Provider value={{ className: "absolute top-2/3 right-4 transform -translate-y-1/2 text-gray-400 cursor-pointer" }}>
                <button type="button" onClick={togglePasswordVisibility} aria-label="Toggle password visibility">
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </IconContext.Provider>
            )}
          </div>
        ))}
        
        {/* Error Message at the Bottom */}
        {errorMessage && <p className="text-center text-red-600">{errorMessage}</p>}
        
        {/* Submit Button */}
        <SubmitButton loading={loading} text={buttonText} onClick={handleSubmit} />
      </form>

      {/* Links for Signup/Login */}
      <p className="text-sm mt-0 text-center text-gray-600">
        {buttonText === "Create Your Account" ? (
          <>
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">Login</a>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <a href="/signup" className="text-indigo-600 hover:underline">Sign Up</a>
          </>
        )}
      </p>
    </div>
  );
};

export default GeneralForm;
