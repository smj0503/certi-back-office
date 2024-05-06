import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { getChainList, getCertificateList } from '@/apis/dashboard.api';
import { issueCertificate } from '@/apis/issue.api';

import AppLayout from '@/components/AppLayout';
import Image from '@/components/ImageUploader';
import IssueContainer from 'components/IssueContainer/InputContainer';
import ActionButton from '@/components/ActionButton';
import Toast from '@/components/Toast';

import styles from '../../styles/Register.module.css';

export default function () {
  /* Local Fields */
  const { t } = useTranslation('common');
  const router = useRouter();

  const [chainList, setChainList] = useState([]);
  const [certificateList, setCertificateList] = useState([]);

  const [certificateId, setCertificateId] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  /* LifeCycle */
  useEffect(() => {
    (async () => {
      const chains = await getChainList();
      const certificates = await getCertificateList();

      setChainList(chains.data.result);
      setCertificateList(certificates.data.result);
    })();
  }, []);

  /* User Actions */
  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      chainId: chainList[0].chainId,
      userWalletAddress: address,
      certificateId: certificateId,
    };

    const { status } = await issueCertificate(data);
    console.log('status : ', status);

    if (status === 200) {
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
            <Image
              label={t('issue.profile')}
              selectable={false}
              initialImage={image}
            />
            <IssueContainer
              setCertificateId={setCertificateId}
              setAddress={setAddress}
              setImage={setImage}
              certificateList={certificateList}
            />
          </div>
          <ActionButton
            type='submit'
            width={185}
            disabled={!(!!certificateId && !!address)}
          >
            {t('issue.buttonTitle')}
          </ActionButton>
        </div>
      </form>
      {show && (
        <Toast state={success} close={close} onClick={onClick} type='issue' />
      )}
    </AppLayout>
  );
}
