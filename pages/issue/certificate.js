import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { getChainList, getCertificateList } from '@/apis/dashboard.api';
import { issueCertificate } from '@/apis/issue.api';

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

  const [accessToken, setToken] = useState('');
  const [chainList, setChainList] = useState([]);
  const [certificateList, setCertificateList] = useState([]);

  const [certificateId, setCertificateId] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  /* LifeCycle */
  useEffect(() => {
    setToken(localStorage.getItem('accessToken'));
    if (accessToken) {
      (async () => {
        const chains = await getChainList(accessToken);
        const certificates = await getCertificateList(accessToken);

        setChainList(chains.data.result);
        setCertificateList(certificates.data.result);
      })();
    }
  }, [accessToken]);

  /* User Actions */
  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      chainId: chainList[0].chainId,
      userWalletAddress: address,
      certificateId: certificateId,
    };

    const { status } = await issueCertificate(accessToken, data);
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
            <Image image={image} />
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
      <Toast state={success} close={close} onClick={onClick} show={show} />
    </AppLayout>
  );
}
