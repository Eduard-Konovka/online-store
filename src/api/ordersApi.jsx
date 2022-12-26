import axios from 'axios';
import { toast } from 'react-toastify';

const ordersApi = data => {
  return axios
    .post('/api/orders', data)
    .then(response =>
      toast.success(
        `Status: ${response.status}. Cart contents successfully accepted for processing. Thanks for your order!`,
      ),
    )
    .catch(error =>
      toast.error(`Failed to process order! Error: ${error.message}`),
    );
};

export default ordersApi;
