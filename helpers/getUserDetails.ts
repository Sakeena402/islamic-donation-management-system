import axios from 'axios';

export const getUserDetails = async () => {
  try {
    const response = await axios.get('/api/auth/me');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      throw new Error("Unauthorized. Please log in.");
    }
    throw new Error("Unable to fetch user details.");
  }
};
