import { privateApi } from '@/apis/index';

export const registerCompany = async (formData) => {
  return await privateApi.post('/company/register', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const registerCertificate = async (formData) => {
  return await privateApi.post('/certificate/register', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
