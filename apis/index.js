import axios from 'axios';

export const publicApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_HOST,
});

// export const privateApi = axios.create({
//   baseURL: `${process.env.NEXT_PUBLIC_API_SERVER_HOST}`,
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//   },
// });
//
// privateApi.interceptors.request.use((config) => {
//   const token = localStorage.getItem('accessToken');
//   config.headers.Authorization = 'Bearer ' + token;
//
//   return config;
// });
