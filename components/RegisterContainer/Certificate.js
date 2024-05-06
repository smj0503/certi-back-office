import useTranslation from 'next-translate/useTranslation';
import { Flex, Select, DatePicker } from 'antd';
import styles from './RegisterContainer.module.css';

export default function ({
  setCompanyId,
  setCategory,
  setStartDate,
  setEndDate,
  setName,
  setDescription,
  setUrl,
  companyList,
}) {
  const { t } = useTranslation('common');

  const onChangeCompany = (value) => {
    setCompanyId(value);
  };

  const onChangeCategory = (value) => {
    setCategory(value);
  };

  const onChangeStartDate = (date) => {
    setStartDate(date);
    console.log('start date : ', date);
  };

  const onChangeEndDate = (date) => {
    setEndDate(date);
    console.log('end date : ', date);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeUrl = (e) => {
    setUrl(e.target.value);
  };

  return (
    <Flex vertical gap={28} className={styles.container}>
      <Flex gap={28}>
        <Flex vertical gap={12} style={{ width: '100%' }}>
          <label className={styles.label}>
            {t('register.certificate.companyName')}
          </label>
          <Select
            className={styles.input}
            placeholder={t('register.certificate.chooseCompany')}
            onChange={onChangeCompany}
            options={companyList.map((company) => {
              return {
                value: company.companyId,
                label: company.companyName,
              };
            })}
          />
        </Flex>
        <Flex vertical gap={12} style={{ width: '100%' }}>
          <label className={styles.label}>
            {t('register.certificate.certificateCategory')}
          </label>
          <Select
            className={styles.input}
            placeholder={t('register.certificate.chooseCategory')}
            onChange={onChangeCategory}
            options={[
              {
                value: '수료증',
                label: '수료증',
              },
              {
                value: '상장',
                label: '상장',
              },
              {
                value: '자격증',
                label: '자격증',
              },
              {
                value: '기타',
                label: '기타',
              },
            ]}
          />
        </Flex>
      </Flex>

      <Flex gap={28}>
        <Flex vertical gap={12} style={{ width: '100%' }}>
          <label className={styles.label}>
            {t('register.certificate.startDate')}
          </label>
          <DatePicker
            placeholder={t('register.certificate.startDatePlaceholder')}
            className={styles.input}
            onChange={onChangeStartDate}
          />
        </Flex>
        <Flex vertical gap={12} style={{ width: '100%' }}>
          <label className={styles.label}>
            {t('register.certificate.endDate')}
          </label>
          <DatePicker
            placeholder={t('register.certificate.endDatePlaceholder')}
            className={styles.input}
            onChange={onChangeEndDate}
          />
        </Flex>
      </Flex>

      <Flex vertical gap={12} style={{ width: '100%' }}>
        <label className={styles.label}>{t('register.certificate.name')}</label>
        <textarea
          placeholder={t('register.certificate.namePlaceholder')}
          className={styles.input}
          onChange={onChangeName}
        />
      </Flex>
      <Flex vertical gap={12} style={{ width: '100%' }}>
        <label className={styles.label}>
          {t('register.certificate.website')}
        </label>
        <textarea
          placeholder={t('register.certificate.websitePlaceholder')}
          className={styles.input}
          onChange={onChangeUrl}
        />
      </Flex>
      <Flex vertical gap={12} style={{ width: '100%' }} data-long={true}>
        <label className={styles.label}>
          {t('register.certificate.description')}
        </label>
        <textarea
          placeholder={t('register.certificate.descriptionPlaceholder')}
          className={styles.input}
          onChange={onChangeDescription}
          data-long={true}
        />
      </Flex>
    </Flex>
  );
}
