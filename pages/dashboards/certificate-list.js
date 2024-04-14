import useTranslation from 'next-translate/useTranslation';
import { useState, useEffect } from 'react';
import { getCertificateList } from '@/apis/dashboard.api';

import AppLayout from '@/components/AppLayout';
import Statistics from '@/components/Statistics';
import CertificateTable from '@/components/CertificateTable';

import styles from '../../styles/Dashboards.module.css';

export default function () {
  /* Local Fields */
  const { t } = useTranslation('common');

  const [accessToken, setToken] = useState('');
  const [certificateList, setCertificateList] = useState([]);

  /* LifeCycle */
  useEffect(() => {
    setToken(localStorage.getItem('accessToken'));
    if (accessToken) {
      (async () => {
        const list = await getCertificateList(accessToken);
        setCertificateList(list.data.result);
      })();
    }
  }, [accessToken]);

  return (
    <AppLayout
      category={t('topBar.dashboards')}
      menu={t('topBar.certificateList')}
    >
      <div className={styles.container}>
        <span className={styles.title}>{t('dashboards.certificateList')}</span>
        <Statistics />
        <CertificateTable certificateList={certificateList} />
      </div>
    </AppLayout>
  );
}
