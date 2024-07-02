// src/utils/axios.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,  // URL de la API
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }
  return config;
});

export default instance;
