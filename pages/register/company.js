import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { registerCompany } from '@/apis/register.api';

import AppLayout from '@/components/AppLayout';
import ImageUploader from '@/components/ImageUploader';
import CompanyRegisterContainer from '@/components/RegisterContainer/Company';
import ActionButton from '@/components/ActionButton';
import Toast from '@/components/Toast/RegisterCompany';

import styles from '../../styles/Register.module.css';

export default function () {
  /* Local Fields */
  const { t } = useTranslation('common');
  const router = useRouter();

  const [accessToken, setToken] = useState('');

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  /* LifeCycle */
  useEffect(() => {
    setToken(localStorage.getItem('accessToken'));
  }, []);

  /* User Actions */
  const onSubmit = async (e) => {
    e.preventDefault();

    const companyRegisterRequestModel = new Blob(
      [
        JSON.stringify({
          companyName: name,
          companyDescription: description,
          companyWebsite: url,
        }),
      ],
      {
        type: 'application/json',
      }
    );

    const formData = new FormData();
    formData.append('file', image);
    formData.append('companyRegisterRequestModel', companyRegisterRequestModel);

    const { status } = await registerCompany(accessToken, formData);
    console.log('status : ', status);

    if (status === 200) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }

    setShow(true);
  };

  const onClick = async () => {
    await router.push('/register/certificate');
  };

  const close = () => {
    setShow(false);
  };

  return (
    <AppLayout category={t('topBar.register')} menu={t('topBar.company')}>
      <form className={styles.container} onSubmit={onSubmit}>
        <span className={styles.title}>
          {t('register.company.registerCompany')}
        </span>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <ImageUploader setImage={setImage}>
              {t('register.company.image')}
            </ImageUploader>
            <CompanyRegisterContainer
              setName={setName}
              setDescription={setDescription}
              setUrl={setUrl}
            />
          </div>
          <ActionButton
            type='submit'
            width={185}
            onClick={onSubmit}
            disabled={!(!!image && !!name && !!description && !!url)}
          >
            {t('register.buttonTitle')}
          </ActionButton>
        </div>
      </form>
      <Toast state={success} close={close} onClick={onClick} show={show} />
    </AppLayout>
  );
}
