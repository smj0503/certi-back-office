import { api } from '@/apis/index';
import LocalStorage from "@/common/localstorage.manager";

const accessToken = LocalStorage.shared.getItem('accessToken');

export const issueCertificate = async (data) => {
  return await api.post('/certificate/issue', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
