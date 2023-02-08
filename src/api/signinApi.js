import axios from 'axios';
import { toast } from 'react-toastify';

const signinApi = async credentials => {
  try {
    const response = await axios.post('/api/signin', credentials);

    return toast.success(
      `Status: ${response.status}. You have successfully registered!`,
    );
  } catch (error) {
    return toast.error(`Failed to register... Error: ${error.message}`);
  }
};

export default signinApi;
