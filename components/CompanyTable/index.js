import useTranslation from 'next-translate/useTranslation';
import CompanyItem from '@/components/CompanyItem';
import styles from './CompanyTable.module.css';

export default function ({ companyList }) {
  const { t } = useTranslation('common');

  return (
    <div className={styles.table}>
      <div className={styles.columns}>
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
      </div>
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
    </div>
  );
}
