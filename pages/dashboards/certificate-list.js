import useTranslation from 'next-translate/useTranslation';
import { useState, useEffect } from 'react';
import { getStatistics, getCertificateList } from '@/apis/dashboard.api';

import AppLayout from '@/components/AppLayout';
import StatusBox from '@/components/StatusBox';
import CertificateTable from '@/components/CertificateTable';

import styles from '../../styles/Dashboards.module.css';
import IconCompany from '../../public/assets/icon-company-28.svg';
import IconCertificate from '../../public/assets/icon-certifiacte-28.svg';
import IconIssue from '../../public/assets/icon-issue-28.svg';

export default function () {
  /* Local Fields */
  const { t } = useTranslation('common');

  const [accessToken, setToken] = useState('');
  const [statistics, setStatistics] = useState();
  const [certificateList, setCertificateList] = useState([]);

  /* LifeCycle */
  useEffect(() => {
    setToken(localStorage.getItem('accessToken'));
    if (accessToken) {
      (async () => {
        const stat = await getStatistics(accessToken);
        const list = await getCertificateList(accessToken);

        setStatistics(stat.data.result);
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
        <div className={styles.statusContainer}>
          {statistics && (
            <>
              <StatusBox
                icon={<IconCompany />}
                count={statistics.registeredCompanyCount}
                color={'rgba(0, 158, 208, 0.10)'}
              >
                {t('dashboards.registeredCompany')}
              </StatusBox>
              <StatusBox
                icon={<IconCertificate />}
                count={statistics.registeredCertificateCount}
                color={'rgba(48, 255, 205, 0.10)'}
              >
                {t('dashboards.registeredCertificate')}
              </StatusBox>
              <StatusBox
                icon={<IconIssue />}
                count={statistics.registeredIssuedCertificateCount}
                color={'rgba(42, 208, 0, 0.10)'}
              >
                {t('dashboards.issuedCertificate')}
              </StatusBox>
            </>
          )}
        </div>
        <CertificateTable certificateList={certificateList} />
      </div>
    </AppLayout>
  );
}
