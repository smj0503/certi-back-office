import { publicApi } from '@/apis/index';

export const signIn = async (username, password) => {
  return await publicApi.post('/auth/backoffice/login', {
    username: username,
    password: password,
  });
};
