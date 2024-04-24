import { api } from '@/apis/index';

export const signIn = async (username, password) => {
  return await api.post('/auth/backoffice/login', {
    username: username,
    password: password
  });
};
