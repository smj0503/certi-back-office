import useTranslation from 'next-translate/useTranslation';
import styles from './RegisterContainer.module.css';

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
    <div className={styles.container}>
      <div className={styles.item}>
        <label className={styles.label}>{t('register.company.name')}</label>
        <textarea className={styles.input} onChange={onChangeName} />
      </div>
      <div className={styles.item} data-long={true}>
        <label className={styles.label}>
          {t('register.company.description')}
        </label>
        <textarea
          className={styles.input}
          onChange={onChangeDescription}
          data-long={true}
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label}>{t('register.company.website')}</label>
        <textarea className={styles.input} onChange={onChangeUrl} />
      </div>
    </div>
  );
}
