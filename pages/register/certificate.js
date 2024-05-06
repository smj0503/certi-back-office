import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getCompanyList } from '@/apis/dashboard.api';
import { registerCertificate } from '@/apis/register.api';

import AppLayout from '@/components/AppLayout';
import ImageUploader from '@/components/ImageUploader';
import CertificateRegisterContainer from '@/components/RegisterContainer/Certificate';
import ActionButton from '@/components/ActionButton';
import Toast from '@/components/Toast';

import styles from '../../styles/Register.module.css';

export default function () {
  /* Local Fields */
  const { t } = useTranslation('common');
  const router = useRouter();

  const [companyList, setCompanyList] = useState([]);
  const [image, setImage] = useState('');

  const [companyId, setCompanyId] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  /* Life Cycle */
  useEffect(() => {
    (async () => {
      const list = await getCompanyList();
      setCompanyList(list.data.result);
    })();
  }, []);

  /* User Actions */
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const certificateRegisterRequestModel = new Blob(
      [
        JSON.stringify({
          companyId: companyId,
          certificateCategory: category,
          certificateName: name,
          certificateDescription: description,
          certificateWebsite: url,
          certificateStartDate: startDate,
          certificateEndDate: endDate,
        }),
      ],
      {
        type: 'application/json',
      }
    );

    formData.append('file', image);
    formData.append(
      'certificateRegisterRequestModel',
      certificateRegisterRequestModel
    );

    const { status } = await registerCertificate(formData);
    console.log('status : ', status);

    if (status === 200) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }

    setShow(true);
  };

  const onClick = async () => {
    await router.push('/issue/certificate');
  };

  const close = () => {
    setShow(false);
  };

  return (
    <AppLayout category={t('topBar.register')} menu={t('topBar.certificate')}>
      <form className={styles.container} onSubmit={onSubmit}>
        <span className={styles.title}>
          {t('register.certificate.registerCertificate')}
        </span>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <ImageUploader
              setImage={setImage}
              label={t('register.certificate.image')}
            />
            <CertificateRegisterContainer
              setImage={setImage}
              setCompanyId={setCompanyId}
              setCategory={setCategory}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setName={setName}
              setDescription={setDescription}
              setUrl={setUrl}
              companyList={companyList}
            />
          </div>
          <ActionButton
            type='submit'
            width={185}
            disabled={
              !(
                !!image &&
                !!name &&
                !!description &&
                !!url &&
                !!companyId &&
                !!category &&
                !!startDate &&
                !!endDate
              )
            }
          >
            {t('register.buttonTitle')}
          </ActionButton>
        </div>
      </form>
      {show && (
        <Toast
          state={success}
          close={close}
          onClick={onClick}
          type='registerCertificate'
        />
      )}
    </AppLayout>
  );
}
