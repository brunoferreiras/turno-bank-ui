import axios from 'axios';
import { useAuthStore } from '../store/auth';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

httpClient.interceptors.request.use((config) => {
  const { getToken } = useAuthStore();
  if (getToken) {
    config.headers.Authorization = `Bearer ${getToken}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      const { logout } = useAuthStore();
      logout();
    }
    return Promise.reject(error);
  }
);
