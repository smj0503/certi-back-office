import { api } from '@/apis/index';

export const registerCompany = async (accessToken, formData) => {
  return await api.post('/company/register', formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const registerCertificate = async (accessToken, formData) => {
  return await api.post('/certificate/register', formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};
