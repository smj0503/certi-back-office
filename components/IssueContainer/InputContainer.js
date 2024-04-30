import useTranslation from 'next-translate/useTranslation';
import { Flex, Select } from 'antd';
import styles from './IssueContainer.module.css';

export default function ({
  setCertificateId,
  setAddress,
  setImage,
  certificateList,
}) {
  const { t } = useTranslation('common');

  const onChangeCertificate = (value) => {
    const target = certificateList.find(
      (certificate) => certificate.certificateId === value
    );
    setCertificateId(value);
    setImage(target?.certificateImageLink);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  return (
    <Flex vertical gap={28} className={styles.container}>
      <Flex vertical gap={12} className={styles.item}>
        <label className={styles.label}>{t('issue.certificate')}</label>
        <Select
          className={styles.select}
          placeholder={t('issue.chooseCertificate')}
          onChange={onChangeCertificate}
          options={certificateList.map((certificate) => {
            return {
              value: certificate.certificateId,
              label: certificate.certificateName,
            };
          })}
        />
      </Flex>
      <Flex vertical gap={12}>
        <label className={styles.label}>{t('issue.walletAddress')}</label>
        <input
          placeholder={t('issue.walletAddressPlaceholder')}
          type='text'
          className={styles.address}
          onChange={onChangeAddress}
        />
      </Flex>
    </Flex>
  );
}
