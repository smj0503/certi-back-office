import useTranslation from 'next-translate/useTranslation';
import styles from './RegisterContainer.module.css';
import { Flex } from 'antd';

export default function ({ setName, setDescription, setUrl }) {
  const { t } = useTranslation('common');

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
      <Flex vertical gap={12} style={{ width: '100%' }}>
        <label className={styles.label}>{t('register.company.name')}</label>
        <textarea
          placeholder={t('register.company.namePlaceholder')}
          className={styles.input}
          onChange={onChangeName}
        />
      </Flex>
      <Flex vertical gap={12} style={{ width: '100%' }} data-long={true}>
        <label className={styles.label}>
          {t('register.company.description')}
        </label>
        <textarea
          placeholder={t('register.company.descriptionPlaceholder')}
          className={styles.input}
          onChange={onChangeDescription}
          data-long={true}
        />
      </Flex>
      <Flex vertical gap={12} style={{ width: '100%' }}>
        <label className={styles.label}>{t('register.company.website')}</label>
        <textarea
          placeholder={t('register.company.websitePlaceholder')}
          className={styles.input}
          onChange={onChangeUrl}
        />
      </Flex>
    </Flex>
  );
}
