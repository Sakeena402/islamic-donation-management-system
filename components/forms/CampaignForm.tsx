// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';

// interface CampaignFormProps {
//   onSubmit: (data: CampaignData) => void;
// }

// interface CampaignData {
//   title: string;
//   description: string;
//   startDate: string;
//   endDate: string;
//   targetAmount: number;
//   image: File | null;
//   category: string;
//   purpose: string;
// }

// const CampaignForm: React.FC<CampaignFormProps> = ({ onSubmit }) => {
//   const [formData, setFormData] = useState<CampaignData>({
//     title: '',
//     description: '',
//     startDate: '',
//     endDate: '',
//     targetAmount: 0,
//     image: null,
//     category: '',
//     purpose: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   // Handle input field changes
//   // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//   //   const { name, value } = e.target;
//   //   setFormData({
//   //     ...formData,
//   //     [name]: value,
//   //   });
//   // };

//   // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const file = e.target.files ? e.target.files[0] : null;
//   //   setFormData({
//   //     ...formData,
//   //     image: file,
//   //   });
//   // };

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setError(null);
//   //   setSuccessMessage(null);

//   //   try {
//   //     const formDataToSubmit = new FormData();
//   //     formDataToSubmit.append('title', formData.title);
//   //     formDataToSubmit.append('description', formData.description);
//   //     formDataToSubmit.append('startDate', formData.startDate);
//   //     formDataToSubmit.append('endDate', formData.endDate);
//   //     formDataToSubmit.append('targetAmount', formData.targetAmount.toString());
//   //     formDataToSubmit.append('category', formData.category);
//   //     formDataToSubmit.append('purpose', formData.purpose);
//   //     if (formData.image) {
//   //       formDataToSubmit.append('image', formData.image);
//   //     }

//   //     // Call the API to save the campaign data
//   //     const response = await fetch('/api/campaign', {
//   //       method: 'POST',
//   //       body: formDataToSubmit, // Send FormData as the request body
//   //     });

//   //     const responseData = await response.json();

//   //     if (response.ok) {
//   //       setSuccessMessage('Campaign created successfully!');
//   //       // Optionally reset the form if needed
//   //       setFormData({
//   //         title: '',
//   //         description: '',
//   //         startDate: '',
//   //         endDate: '',
//   //         targetAmount: 0,
//   //         image: null,
//   //         category: '',
//   //         purpose: '',
//   //       });
//   //       onSubmit(responseData); // Send the response data back to the parent component
//   //     } else {
//   //       // Display all server-side error messages
//   //       setError(responseData.error || 'An error occurred while creating the campaign.');
//   //     }
//   //   } catch (error: any) {
//   //     console.error('Error submitting form:', error);
//   //     // Display a more descriptive error message for network or server issues
//   //     setError('An error occurred while submitting the form. Please try again later.');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files ? e.target.files[0] : null;
//     setFormData({
//       ...formData,
//       image: file,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccessMessage(null);

//     try {
//       const formDataToSubmit = new FormData();
//       formDataToSubmit.append('title', formData.title);
//       formDataToSubmit.append('description', formData.description);
//       formDataToSubmit.append('startDate', formData.startDate);
//       formDataToSubmit.append('endDate', formData.endDate);
//       formDataToSubmit.append('targetAmount', formData.targetAmount.toString());
//       formDataToSubmit.append('category', formData.category);
//       formDataToSubmit.append('purpose', formData.purpose);
//       if (formData.image) {
//         formDataToSubmit.append('image', formData.image);
//       }

//       // Use axios to send the POST request
//       const response = await axios.post('/api/campaign', formDataToSubmit, {
//         headers: {
//           'Content-Type': 'multipart/form-data', // Important for FormData
//         },
//       });

//       if (response.status === 200) {
//         setSuccessMessage('Campaign created successfully!');
//         // Optionally reset the form if needed
//         setFormData({
//           title: '',
//           description: '',
//           startDate: '',
//           endDate: '',
//           targetAmount: 0,
//           image: null,
//           category: '',
//           purpose: '',
//         });
//         onSubmit(response.data); // Send the response data back to the parent component
//       }
//     } catch (error: any) {
//       console.error('Error submitting form:', error);
//       // Display a more descriptive error message for network or server issues
//       setError('An error occurred while submitting the form. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.form
//       className="space-y-6 bg-white bg-opacity-50 mt-28 p-10 rounded-lg shadow-xl w-full max-w-5xl mx-auto"
//       onSubmit={handleSubmit}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <h2 className="text-3xl font-semibold text-center text-[#0b221d]">Create a Campaign</h2>

//       {/* Display error or success message */}
//       {error && <p className="text-red-500 text-center">{error}</p>}
//       {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

//       {/* Horizontal Layout for the Fields */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Campaign Title */}
//         <div className="flex flex-col">
//           <label htmlFor="title" className="text-lg font-medium text-[#0b221d]">
//             Campaign Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             className="mt-2 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b221d] focus:outline-none transition-all duration-300"
//             required
//           />
//         </div>

//         {/* Category */}
//         <div className="flex flex-col">
//           <label htmlFor="category" className="text-lg font-medium text-[#0b221d]">
//             Category
//           </label>
//           <select
//             id="category"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="mt-2 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b221d] focus:outline-none transition-all duration-300"
//             required
//           >
//             <option value="">Select a category</option>
//             <option value="education">Education</option>
//             <option value="healthcare">Healthcare</option>
//             <option value="environment">Environment</option>
//             <option value="others">Others</option>
//           </select>
//         </div>
//       </div>

//       {/* Purpose */}
//       <div className="flex flex-col">
//         <label htmlFor="purpose" className="text-lg font-medium text-[#0b221d]">
//           Purpose
//         </label>
//         <select
//           id="purpose"
//           name="purpose"
//           value={formData.purpose}
//           onChange={handleChange}
//           className="mt-2 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b221d] focus:outline-none transition-all duration-300"
//           required
//         >
//           <option value="">Select a purpose</option>
//           <option value="zakat">Zakat</option>
//           <option value="fitra">Fitra</option>
//           <option value="sadqa">Sadqa</option>
//           <option value="general">General</option>
//         </select>
//       </div>

//       {/* Description Field */}
//       <div className="flex flex-col">
//         <label htmlFor="description" className="text-lg font-medium text-[#0b221d]">
//           Description
//         </label>
//         <textarea
//           id="description"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           className="mt-2 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b221d] focus:outline-none transition-all duration-300"
//           rows={4}
//           required
//         />
//       </div>

//       {/* Start & End Date */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Start Date */}
//         <div className="flex flex-col">
//           <label htmlFor="startDate" className="text-lg font-medium text-[#0b221d]">
//             Start Date
//           </label>
//           <input
//             type="date"
//             id="startDate"
//             name="startDate"
//             value={formData.startDate}
//             onChange={handleChange}
//             className="mt-2 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b221d] focus:outline-none transition-all duration-300"
//             required
//           />
//         </div>

//         {/* End Date */}
//         <div className="flex flex-col">
//           <label htmlFor="endDate" className="text-lg font-medium text-[#0b221d]">
//             End Date
//           </label>
//           <input
//             type="date"
//             id="endDate"
//             name="endDate"
//             value={formData.endDate}
//             onChange={handleChange}
//             className="mt-2 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b221d] focus:outline-none transition-all duration-300"
//             required
//           />
//         </div>
//       </div>

//       {/* Target Amount */}
//       <div className="flex flex-col">
//         <label htmlFor="targetAmount" className="text-lg font-medium text-[#0b221d]">
//           Target Amount ($)
//         </label>
//         <input
//           type="number"
//           id="targetAmount"
//           name="targetAmount"
//           value={formData.targetAmount}
//           onChange={handleChange}
//           className="mt-2 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b221d] focus:outline-none transition-all duration-300"
//           required
//         />
//       </div>

//       {/* Campaign Image */}
//       <div className="flex flex-col">
//         <label htmlFor="image" className="text-lg font-medium text-[#0b221d]">
//           Upload Image
//         </label>
//         <input
//           type="file"
//           id="image"
//           name="image"
//           onChange={handleFileChange}
//           className="mt-2 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b221d] focus:outline-none transition-all duration-300"
//         />
//       </div>

//       {/* Submit Button */}
//       <div className="flex justify-center mt-8">
//         <button
//           type="submit"
//           className={`px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300 ${
//             loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#0b221d] hover:bg-[#093d32]'
//           }`}
//           disabled={loading}
//         >
//           {loading ? 'Submitting...' : 'Create Campaign'}
//         </button>
//       </div>
//     </motion.form>
//   );
// };

// export default CampaignForm;






import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useUser } from '@/context/userContext'; // Import the UserContext

interface CampaignFormProps {
  onSubmit: (data: CampaignData) => void;
}

interface CampaignData {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  targetAmount: number;
  image: File | null;
  category: string;
  purpose: string;
  createdBy: string; // Add this field to store user ID
  requestedBy: string,
  userRole: string; // Add this field to store user role
}

const CampaignForm: React.FC<CampaignFormProps> = ({ onSubmit }) => {
  const { userId, role } = useUser(); // Get userId and role from context
  console.log(`userId: ${userId} ,, role ${role}`);
  const [formData, setFormData] = useState<CampaignData>({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    targetAmount: 0,
    image: null,
    category: '',
    purpose: '',
    createdBy: userId || '',  // Prepopulate with userId if available
    requestedBy: userId || '',
    userRole: role || '',  // Prepopulate with role if available
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('title', formData.title);
      formDataToSubmit.append('description', formData.description);
      formDataToSubmit.append('startDate', formData.startDate);
      formDataToSubmit.append('endDate', formData.endDate);
      formDataToSubmit.append('targetAmount', formData.targetAmount.toString());
      formDataToSubmit.append('category', formData.category);
      formDataToSubmit.append('purpose', formData.purpose);
      formDataToSubmit.append('createdBy', formData.createdBy); // Send userId as createdBy
      formDataToSubmit.append('requestedBy', formData.requestedBy); // Send userId as createdBy
      formDataToSubmit.append('userRole', formData.userRole); // Send user role
      if (formData.image) {
        formDataToSubmit.append('image', formData.image);
      }

      // Use axios to send the POST request
      const response = await axios.post('/api/campaign', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for FormData
        },
      });

      if (response.status === 200) {
        setSuccessMessage('Campaign created successfully!');
        setFormData({
          title: '',
          description: '',
          startDate: '',
          endDate: '',
          targetAmount: 0,
          image: null,
          category: '',
          purpose: '',
          createdBy: userId || '',  // Reset createdBy to userId
          requestedBy: userId || '', 
          userRole: role || '', // Reset userRole to current role
        });
        onSubmit(response.data); // Send the response data back to the parent component
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setError('An error occurred while submitting the form. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      className="space-y-6 bg-white bg-opacity-50 mt-28 p-10 rounded-lg shadow-xl w-full max-w-5xl mx-auto"
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold text-center text-[#0b221d]">Create a Campaign</h2>

      {/* Display error or success message */}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

      {/* Horizontal Layout for the Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Campaign Title */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg font-medium text-[#0b221d]">
            Campaign Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-2 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b221d] focus:outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label htmlFor="category" className="text-lg font-medium text-[#0b221d]">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-2 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b221d] focus:outline-none transition-all duration-300"
            required
          >
            <option value="">Select a category</option>
            <option value="education">Education</option>
            <option value="healthcare">Healthcare</option>
            <option value="environment">Environment</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>

      {/* Purpose */}
      <div className="flex flex-col">
        <label htmlFor="purpose" className="text-lg font-medium text-[#0b221d]">
          Purpose
        </label>
        <select
          id="purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          className="mt-2 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b221d] focus:outline-none transition-all duration-300"
          required
        >
          <option value="">Select a purpose</option>
          <option value="zakat">Zakat</option>
          <option value="fitra">Fitra</option>
          <option value="sadqa">Sadqa</option>
          <option value="general">General</option>
        </select>
      </div>

      {/* Description Field */}
      <div className="flex flex-col">
        <label htmlFor="description" className="text-lg font-medium text-[#0b221d]">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-2 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b221d] focus:outline-none transition-all duration-300"
          rows={4}
          required
        />
      </div>

      {/* Date and Target Amount */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <label htmlFor="startDate" className="text-lg font-medium text-[#0b221d]">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="mt-2 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b221d] focus:outline-none transition-all duration-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="endDate" className="text-lg font-medium text-[#0b221d]">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="mt-2 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b221d] focus:outline-none transition-all duration-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="targetAmount" className="text-lg font-medium text-[#0b221d]">
            Target Amount
          </label>
          <input
            type="number"
            id="targetAmount"
            name="targetAmount"
            value={formData.targetAmount}
            onChange={handleChange}
            className="mt-2 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b221d] focus:outline-none transition-all duration-300"
            required
          />
        </div>
      </div>

      {/* Image Upload */}
      <div className="flex flex-col">
        <label htmlFor="image" className="text-lg font-medium text-[#0b221d]">
          Campaign Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleFileChange}
          className="mt-2"
          accept="image/*"
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="mt-4 px-6 py-3 bg-[#0b221d] text-white rounded-lg shadow-md hover:bg-[#0a1e18] transition-all duration-300"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Create Campaign'}
        </button>
      </div>
    </motion.form>
  );
};

export default CampaignForm;
