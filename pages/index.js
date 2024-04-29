import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LocalStorage from '@/common/localstorage.manager';
import { signIn } from '@/apis/signin.api';

import { Flex } from 'antd';
import ActionButton from '@/components/ActionButton';
import styles from '../styles/Login.module.css';
import Logo from '/public/assets/logo/logo-signin.svg';
import Thumbnail from '/public/assets/photo/photo-thumbnail.png';

export default function () {
  const { t } = useTranslation('common');
  const router = useRouter();
  const accessToken = LocalStorage.shared.getItem('accessToken');

  useEffect(() => {
    if (accessToken) {
      (async () => {
        console.log('session 있음');
        await router.replace('/dashboards/company-list');
      })();
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const { data } = await signIn(e.target.id.value, e.target.password.value);
    if (data) {
      LocalStorage.shared.setItem('accessToken', data.result.token);
      await router.replace('/dashboards/company-list');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <Image
          src={Thumbnail}
          width={726}
          height={823}
          alt='login image'
          className={styles.image}
          priority={true}
        />
      </div>
      <Flex align='center' justify='center' className={styles.login}>
        <form className={styles.loginBox} onSubmit={onSubmit}>
          <Flex vertical align='center' gap={56}>
            <Logo />
            <Flex
              vertical
              align='center'
              justify='center'
              gap={12}
              style={{ width: '100%' }}
            >
              <span className={styles.title}>
                {t('signIn.loginToYourAccount')}
              </span>
              <span className={styles.subTitle}>
                {t('signIn.pleaseEnterYourDetails')}
              </span>
            </Flex>
            <Flex vertical gap={16} style={{ width: '100%' }}>
              <input type='text' name='id' placeholder='ID' required={true} />
              <input
                type='password'
                name='password'
                placeholder='Password'
                required={true}
              />
            </Flex>
            <ActionButton type='submit' width='100%'>
              {t('signIn.login')}
            </ActionButton>
          </Flex>
        </form>
      </Flex>
    </div>
  );
}
