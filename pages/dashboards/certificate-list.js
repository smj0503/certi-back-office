import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import { asyncEffect } from '@/common/utils';

import useDashboardModule from '@/apis/dashboard.api';

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

  const [statistics, setStatistics] = useState();
  const [certificateList, setCertificateList] = useState([]);

  /* APIs */
  const { getStatistics, getCertificateList } = useDashboardModule();

  /* LifeCycle */
  asyncEffect(async () => {
    const stat = await getStatistics();
    setStatistics(stat);

    const list = await getCertificateList();
    setCertificateList(list);
  });

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
                count={statistics.registered_company_cnt}
                color={'rgba(0, 158, 208, 0.10)'}
              >
                {t('dashboards.registeredCompany')}
              </StatusBox>
              <StatusBox
                icon={<IconCertificate />}
                count={statistics.registered_certificate_cnt}
                color={'rgba(48, 255, 205, 0.10)'}
              >
                {t('dashboards.registeredCertificate')}
              </StatusBox>
              <StatusBox
                icon={<IconIssue />}
                count={statistics.issued_certificate_cnt}
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
