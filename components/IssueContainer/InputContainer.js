import useTranslation from 'next-translate/useTranslation';
import styles from './IssueContainer.module.css';

export default function ({
  setCertificateId,
  setAddress,
  setImage,
  certificateList,
}) {
  const { t } = useTranslation('common');

  const onChangeCertificate = (e) => {
    const target = certificateList.find(
      (certificate) => certificate.certificateName === e.target.value
    );
    setCertificateId(target?.certificateId);
    setImage(target?.certificateImageLink);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <label className={styles.label}>{t('issue.certificate')}</label>
        <select className={styles.select} onChange={onChangeCertificate}>
          <option value=''>{t('issue.chooseCertificate')}</option>
          {certificateList &&
            certificateList.length > 0 &&
            certificateList.map((certificate, index) => {
              return <option key={index}>{certificate.certificateName}</option>;
            })}
        </select>
      </div>
      <div className={styles.controller}>
        <div className={styles.item}>
          <label className={styles.label}>{t('issue.walletAddress')}</label>
          <input
            type='text'
            className={styles.address}
            onChange={onChangeAddress}
          />
        </div>
      </div>
    </div>
  );
}
