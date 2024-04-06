import axios from 'axios';

export const publicApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const privateApi = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  config.headers.Authorization = 'Bearer ' + token;

  return config;
});
