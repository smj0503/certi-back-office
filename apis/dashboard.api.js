import { api } from '@/apis/index';

export const getCompanyList = async (accessToken) => {
  return await api.get('/company/list', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getCertificateList = async (accessToken) => {
  return await api.get('/certificate/list', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getChainList = async (accessToken) => {
  return await api.get('/chain/list', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
