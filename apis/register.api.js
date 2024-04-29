import { api } from '@/apis/index';
import LocalStorage from "@/common/localstorage.manager";

const accessToken = LocalStorage.shared.getItem('accessToken');

export const registerCompany = async (formData) => {
  return await api.post('/company/register', formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const registerCertificate = async (formData) => {
  return await api.post('/certificate/register', formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};
