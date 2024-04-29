import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LocalStorage from "@/common/localstorage.manager";
import { signIn } from '@/apis/signin.api';
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
      <div className={styles.login}>
        <form className={styles.loginBox} onSubmit={onSubmit}>
          <Logo />
          <div className={styles.description}>
            <span className={styles.title}>
              {t('signIn.loginToYourAccount')}
            </span>
            <span className={styles.subTitle}>
              {t('signIn.pleaseEnterYourDetails')}
            </span>
          </div>
          <div className={styles.inputContainer}>
            <input type='text' name='id' placeholder='ID' required={true} />
            <input
              type='password'
              name='password'
              placeholder='Password'
              required={true}
            />
          </div>
          <ActionButton type='submit' width='100%'>
            {t('signIn.login')}
          </ActionButton>
        </form>
      </div>
    </div>
  );
}
