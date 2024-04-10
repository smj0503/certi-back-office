import { api } from '@/apis/index';

export const issueCertificate = async (accessToken, data) => {
  return await api.post('/certificate/issue', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
