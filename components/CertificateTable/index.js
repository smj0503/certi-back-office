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
              image={certificate.certificateImageLink}
              name={certificate.certificateName}
              description={certificate.certificateDescription}
              companyName={certificate.companyName}
              category={certificate.certificateImageCategory}
              issueNum={certificate.issuedCount}
              startDate={certificate.certificateRegisterDate}
              endDate={certificate.certificateEndDate}
            />
          );
        })}
    </div>
  );
}
