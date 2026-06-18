import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const enquiryService = {
  submitEnquiry: async (data: { name: string; email: string; phone: string }) => {
    const response = await api.post('/enquiry', data);
    return response.data;
  },
};

export default api;