import useTranslation from 'next-translate/useTranslation';

import styles from './IssueContainer.module.css';

export default function ({
  setCertificate,
  setReceiver,
  setAddress,
  setImage,
  certificateList,
}) {
  const { t } = useTranslation('common');

  const onChangeCertificate = (e) => {
    const target = certificateList.find(
      (certificate) => certificate.certificate_name === e.target.value
    );
    setCertificate(target?.id);
    setImage(target?.certificate_image);
  };

  const onChangeReceiver = (e) => {
    setReceiver(e.target.value);
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
              return (
                <option key={index}>{certificate.certificate_name}</option>
              );
            })}
        </select>
      </div>
      <div className={styles.controller}>
        <div className={styles.item}>
          <label className={styles.label}>{t('issue.receiver')}</label>
          <input
            type='text'
            className={styles.receiver}
            onChange={onChangeReceiver}
          />
        </div>
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
