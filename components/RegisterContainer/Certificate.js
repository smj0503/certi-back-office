import useTranslation from 'next-translate/useTranslation';
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

  const onChangeCompany = (e) => {
    setCompanyId(e.target.value);
  };

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const onChangeStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const onChangeEndDate = (e) => {
    setEndDate(e.target.value);
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
    <div className={styles.container}>
      <div className={styles.pair}>
        <div className={styles.item}>
          <label className={styles.label}>
            {t('register.certificate.companyName')}
          </label>
          <select className={styles.input} onChange={onChangeCompany}>
            <option value=''>{t('register.certificate.chooseCompany')}</option>
            {companyList.length > 0 &&
              companyList.map((company, index) => {
                return (
                  <option key={index} value={company.companyId}>
                    {company.companyName}
                  </option>
                );
              })}
          </select>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>
            {t('register.certificate.certificateCategory')}
          </label>
          <select className={styles.input} onChange={onChangeCategory}>
            <option value=''>{t('register.certificate.chooseCategory')}</option>
            <option>{'Diploma'}</option>
            <option>{'Contest'}</option>
            <option>{'License'}</option>
            <option>{'Others'}</option>
          </select>
        </div>
      </div>

      <div className={styles.pair}>
        <div className={styles.item}>
          <label className={styles.label}>
            {t('register.certificate.startDate')}
          </label>
          <input
            type='text'
            className={styles.input}
            onChange={onChangeStartDate}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>
            {t('register.certificate.endDate')}
          </label>
          <input
            type='text'
            className={styles.input}
            onChange={onChangeEndDate}
          />
        </div>
      </div>

      <div className={styles.item}>
        <label className={styles.label}>{t('register.certificate.name')}</label>
        <textarea className={styles.input} onChange={onChangeName} />
      </div>
      <div className={styles.item}>
        <label className={styles.label}>
          {t('register.certificate.website')}
        </label>
        <textarea className={styles.input} onChange={onChangeUrl} />
      </div>
      <div className={styles.item} data-long={true}>
        <label className={styles.label}>
          {t('register.certificate.description')}
        </label>
        <textarea
          className={styles.input}
          onChange={onChangeDescription}
          data-long={true}
        />
      </div>
    </div>
  );
}
