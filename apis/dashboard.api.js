import { privateApi, publicApi } from '@/apis/index';

export const getCompanyList = async () => await publicApi.get('/company/list');

export const getCertificateList = async () =>
  await privateApi.get('/certificate/list');

export const getChainList = async () => await privateApi.get('/chain/list');
