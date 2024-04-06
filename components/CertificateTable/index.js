import useTranslation from 'next-translate/useTranslation';

import CertificateItem from '@/components/CertificateItem';

import styles from './CertificateTable.module.css';

export default function ({ certificateList }) {
  const { t } = useTranslation('common');

  return (
    <div className={styles.table}>
      <div className={styles.columns}>
        <div className={styles.name}>
          <label>{t('dashboards.certificate')}</label>
        </div>
        <div className={styles.longData}>
          <label>{t('dashboards.company')}</label>
        </div>
        <div className={styles.longData}>
          <label>{t('dashboards.category')}</label>
        </div>
        <div className={styles.shortData}>
          <label>{t('dashboards.issue')}</label>
        </div>
        <div className={styles.date}>
          <label>{t('dashboards.startDate')}</label>
        </div>
        <div className={styles.date}>
          <label>{t('dashboards.endDate')}</label>
        </div>
      </div>
      {certificateList &&
        certificateList.length > 0 &&
        certificateList.map((certificate, index) => {
          return (
            <CertificateItem
              key={index}
              image={certificate.certificate_image}
              name={certificate.certificate_name}
              description={certificate.certificate_description}
              companyName={certificate.company_name}
              category={certificate.certificate_category}
              issueNum={certificate.issued}
              startDate={certificate.certificate_start_date.substring(10, -1)}
              endDate={certificate.certificate_end_date.substring(10, -1)}
            />
          );
        })}
    </div>
  );
}
