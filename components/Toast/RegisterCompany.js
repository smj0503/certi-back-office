import useTranslation from 'next-translate/useTranslation';

import styles from './Toast.module.css';
import IconCheck from '../../public/assets/icon-check.svg';
import IconWarning from '../../public/assets/icon-warning.svg';

export default function ({ state, onClick, close, show }) {
  const { t } = useTranslation('common');

  return (
    <div className={styles.toast} data-shown={show}>
      <div className={styles.notion}>
        {state ? <IconCheck /> : <IconWarning />}
        <div className={styles.message}>
          {state ? (
            <>
              <span className={styles.state}>
                {t('toast.registerCompany.success')}
              </span>
              <span className={styles.confirm}>
                {t('toast.registerCompany.successMessage')}
              </span>
            </>
          ) : (
            <>
              <span className={styles.state}>
                {t('toast.registerCompany.failed')}
              </span>
              <span className={styles.confirm}>
                {t('toast.registerCompany.failMessage')}
              </span>
            </>
          )}
        </div>
      </div>
      {state ? (
        <div className={styles.buttonGroup}>
          <button
            type='button'
            className={styles.button}
            data-color='white'
            onClick={close}
          >
            <label>{t('toast.cancel')}</label>
          </button>
          <button type='button' className={styles.button} onClick={onClick}>
            <label>{t('toast.yes')}</label>
          </button>
        </div>
      ) : (
        <div className={styles.buttonGroup}>
          <button type='button' className={styles.button} onClick={close}>
            <label>{t('toast.retry')}</label>
          </button>
        </div>
      )}
    </div>
  );
}
