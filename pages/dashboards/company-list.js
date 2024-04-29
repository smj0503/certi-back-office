import useTranslation from 'next-translate/useTranslation';
import { useState, useEffect } from 'react';
import { getCompanyList } from '@/apis/dashboard.api';

import AppLayout from '@/components/AppLayout';
import Statistics from '@/components/Statistics';
import CompanyTable from '@/components/CompanyTable';

import styles from '@/styles/Dashboards.module.css';

export default function () {
  const { t } = useTranslation('common');
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    (async () => {
      const list = await getCompanyList();
      setCompanyList(list.data.result);
    })();
  }, []);

  return (
    <AppLayout category={t('topBar.dashboards')} menu={t('topBar.companyList')}>
      <div className={styles.container}>
        <span className={styles.title}>{t('dashboards.companyList')}</span>
        <Statistics />
        <CompanyTable companyList={companyList} />
      </div>
    </AppLayout>
  );
}
