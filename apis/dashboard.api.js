import { api } from '@/apis/index';
import LocalStorage from '@/common/localstorage.manager';

const accessToken = LocalStorage.shared.getItem('accessToken');

export const getStatistics = async () => {
  return await api.get('/backoffice/stat', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getCompanyList = async () => {
  return await api.get('/company/list', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getCertificateList = async () => {
  return await api.get('/certificate/list', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getChainList = async () => {
  return await api.get('/chain/list', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
