import useTranslation from 'next-translate/useTranslation';
import { useState, useEffect } from 'react';
import { getStatistics } from '@/apis/dashboard.api';

import Item from './Item';

import styles from './Statistics.module.css';
import IconCompany from '@/public/assets/icon-company-28.svg';
import IconCertificate from '@/public/assets/icon-certifiacte-28.svg';
import IconIssue from '@/public/assets/icon-issue-28.svg';

export default function () {
  const { t } = useTranslation('common');
  const [statistics, setStatistics] = useState();

  useEffect(() => {
    (async () => {
      const stat = await getStatistics();
      setStatistics(stat.data.result);
    })();
  }, []);

  return (
    <div className={styles.statusContainer}>
      {statistics && (
        <>
          <Item
            icon={<IconCompany />}
            count={statistics.registeredCompanyCount}
            color={'rgba(0, 158, 208, 0.10)'}
          >
            {t('dashboards.registeredCompany')}
          </Item>
          <Item
            icon={<IconCertificate />}
            count={statistics.registeredCertificateCount}
            color={'rgba(48, 255, 205, 0.10)'}
          >
            {t('dashboards.registeredCertificate')}
          </Item>
          <Item
            icon={<IconIssue />}
            count={statistics.registeredIssuedCertificateCount}
            color={'rgba(42, 208, 0, 0.10)'}
          >
            {t('dashboards.issuedCertificate')}
          </Item>
        </>
      )}
    </div>
  );
}
