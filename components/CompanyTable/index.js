import useTranslation from 'next-translate/useTranslation';
import { Flex } from 'antd';
import CompanyItem from '@/components/CompanyItem';
import styles from './CompanyTable.module.css';

export default function ({ companyList }) {
  const { t } = useTranslation('common');

  return (
    <Flex vertical className={styles.table}>
      <Flex align='flex-start' className={styles.columns}>
        <div className={styles.name}>
          <label>{t('dashboards.company')}</label>
        </div>
        <div className={styles.data}>
          <label>{t('dashboards.certificateNum')}</label>
        </div>
        <div className={styles.data}>
          <label>{t('dashboards.issue')}</label>
        </div>
        <div className={styles.data}>
          <label>{t('dashboards.date')}</label>
        </div>
      </Flex>
      {companyList.length > 0 &&
        companyList.map((company, index) => {
          return (
            <CompanyItem
              key={index}
              image={company.companyImageLink}
              name={company.companyName}
              description={company.companyDescription}
              certificateNum={company.certificateRegisterCount}
              issueNum={company.certificateIssueCount}
              date={company.companyRegisterDate}
            />
          );
        })}
    </Flex>
  );
}
