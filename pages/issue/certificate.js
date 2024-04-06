import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { asyncEffect } from '@/common/utils';

import useDashboardModule from '@/apis/dashboard.api';
import useIssueModule from '@/apis/issue.api';

import AppLayout from '@/components/AppLayout';
import Image from '@/components/IssueContainer/Image';
import IssueContainer from 'components/IssueContainer/InputContainer';
import ActionButton from '@/components/ActionButton';
import Toast from '@/components/Toast/Issue';

import styles from '../../styles/Register.module.css';

export default function () {
  /* Local Fields */
  const { t } = useTranslation('common');
  const router = useRouter();

  const [certificateList, setList] = useState([]);

  const [certificate, setCertificate] = useState('');
  const [receiver, setReceiver] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  /* APIs */
  const { getCertificateList } = useDashboardModule();
  const { issueCertificate } = useIssueModule();

  /* LifeCycle */
  asyncEffect(async () => {
    const list = await getCertificateList();
    setList(list);
  }, []);

  /* User Actions */
  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await issueCertificate(certificate, address, receiver);
    console.log('result : ', result);

    if (result === 'success') {
      setSuccess(true);
    } else {
      setSuccess(false);
    }

    setShow(true);
  };

  const onClick = async () => {
    await router.push('/dashboards/certificate-list');
  };

  const close = () => {
    setShow(false);
  };

  return (
    <AppLayout category={t('topBar.issue')} menu={t('topBar.certificate')}>
      <form className={styles.container} onSubmit={onSubmit}>
        <span className={styles.title}>
          {t('issue.issueDigitalCertificate')}
        </span>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <Image image={image} />
            <IssueContainer
              setCertificate={setCertificate}
              setReceiver={setReceiver}
              setAddress={setAddress}
              setImage={setImage}
              certificateList={certificateList}
            />
          </div>
          <ActionButton
            type='submit'
            width={185}
            disabled={!(!!certificate && !!receiver && !!address)}
          >
            {t('issue.buttonTitle')}
          </ActionButton>
        </div>
      </form>
      <Toast state={success} close={close} onClick={onClick} show={show} />
    </AppLayout>
  );
}
