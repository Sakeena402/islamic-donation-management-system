import axios from 'axios';

export const getUserDetails = async () => {
  try {
    const response = await axios.get('/api/auth/get-user-details');
    return response.data.data;
  } catch (error) {
    throw new Error("Unable to fetch user details.");
  }
};
