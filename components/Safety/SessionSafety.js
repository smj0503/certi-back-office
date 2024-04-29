import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LocalStorage from '@/common/localstorage.manager';

export default function ({ children }) {
  const router = useRouter();
  const accessToken = LocalStorage.shared.getItem('accessToken');

  useEffect(() => {
    if (!accessToken) {
      (async () => {
        console.log('session 없음');
        await router.replace('/');
      })();
    }
  }, []);

  return <>{children}</>;
}
