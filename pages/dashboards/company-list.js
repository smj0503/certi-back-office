import useTranslation from 'next-translate/useTranslation';
import { useState, useEffect } from 'react';
import { getCompanyList } from '@/apis/dashboard.api';

import AppLayout from '@/components/AppLayout';
import StatusBox from '@/components/StatusBox';
import CompanyTable from '@/components/CompanyTable';

import styles from '../../styles/Dashboards.module.css';
import IconCompany from '../../public/assets/icon-company-28.svg';
import IconCertificate from '../../public/assets/icon-certifiacte-28.svg';
import IconIssue from '../../public/assets/icon-issue-28.svg';

export default function () {
  /* Local Fields */
  const { t } = useTranslation('common');

  const [accessToken, setToken] = useState('');
  const [statistics, setStatistics] = useState();
  const [companyList, setCompanyList] = useState([]);

  /* LifeCycle */
  useEffect(() => {
    setToken(localStorage.getItem('accessToken'));
    console.log('accessToken : ', accessToken);
    if (accessToken) {
      (async () => {
        const list = await getCompanyList(accessToken);
        console.log('list : ', list);
      })();
    }
  }, [accessToken]);

  return (
    <AppLayout category={t('topBar.dashboards')} menu={t('topBar.companyList')}>
      <div className={styles.container}>
        <span className={styles.title}>{t('dashboards.companyList')}</span>
        <div className={styles.statusContainer}>
          {/*{statistics && (*/}
          {/*  <>*/}
          {/*    <StatusBox*/}
          {/*      icon={<IconCompany />}*/}
          {/*      count={statistics.registered_company_cnt}*/}
          {/*      color={'rgba(0, 158, 208, 0.10)'}*/}
          {/*    >*/}
          {/*      {t('dashboards.registeredCompany')}*/}
          {/*    </StatusBox>*/}
          {/*    <StatusBox*/}
          {/*      icon={<IconCertificate />}*/}
          {/*      count={statistics.registered_certificate_cnt}*/}
          {/*      color={'rgba(48, 255, 205, 0.10)'}*/}
          {/*    >*/}
          {/*      {t('dashboards.registeredCertificate')}*/}
          {/*    </StatusBox>*/}
          {/*    <StatusBox*/}
          {/*      icon={<IconIssue />}*/}
          {/*      count={statistics.issued_certificate_cnt}*/}
          {/*      color={'rgba(42, 208, 0, 0.10)'}*/}
          {/*    >*/}
          {/*      {t('dashboards.issuedCertificate')}*/}
          {/*    </StatusBox>*/}
          {/*  </>*/}
          {/*)}*/}
        </div>
        <CompanyTable companyList={companyList} />
      </div>
    </AppLayout>
  );
}
