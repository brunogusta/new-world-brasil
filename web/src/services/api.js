import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3002/',
});

api.interceptors.request.use(async (config) => {
  const token = await getToken();

  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
