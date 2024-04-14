import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ({ children }) {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      (async () => {
        console.log('session 없음');
        await router.replace('/');
      })();
    }
  }, []);

  return <>{children}</>;
}
