import useTranslation from 'next-translate/useTranslation';
import { Flex } from 'antd';
import styles from './Toast.module.css';
import IconCheck from '../../public/assets/icon-check.svg';
import IconWarning from '../../public/assets/icon-warning.svg';

export default function ({ state, onClick, close, type }) {
  const { t } = useTranslation('common');

  const renderSuccessMessage = () => {
    if (type === 'registerCompany') {
      return (
        <>
          <span className={styles.state}>
            {t('toast.registerCompany.success')}
          </span>
          <span className={styles.confirm}>
            {t('toast.registerCompany.successMessage')}
          </span>
        </>
      );
    } else if (type === 'registerCertificate') {
      return (
        <>
          <span className={styles.state}>
            {t('toast.registerCertificate.success')}
          </span>
          <span className={styles.confirm}>
            {t('toast.registerCertificate.successMessage')}
          </span>
        </>
      );
    } else {
      return (
        <>
          <span className={styles.state}>{t('toast.issue.success')}</span>
          <span className={styles.confirm}>
            {t('toast.issue.successMessage')}
          </span>
        </>
      );
    }
  };

  const renderFailMessage = () => {
    if (type === 'registerCompany') {
      return (
        <>
          <span className={styles.state}>
            {t('toast.registerCompany.failed')}
          </span>
          <span className={styles.confirm}>
            {t('toast.registerCompany.failMessage')}
          </span>
        </>
      );
    } else if (type === 'registerCertificate') {
      return (
        <>
          <span className={styles.state}>
            {t('toast.registerCertificate.failed')}
          </span>
          <span className={styles.confirm}>
            {t('toast.registerCertificate.failMessage')}
          </span>
        </>
      );
    } else {
      return (
        <>
          <span className={styles.state}>{t('toast.issue.failed')}</span>
          <span className={styles.confirm}>{t('toast.issue.failMessage')}</span>
        </>
      );
    }
  };

  return (
    <Flex vertical gap={32} className={styles.toast}>
      <Flex align='center' gap={20}>
        {state ? <IconCheck /> : <IconWarning />}
        <Flex vertical gap={8}>
          {state ? renderSuccessMessage() : renderFailMessage()}
        </Flex>
      </Flex>
      {state ? (
        <Flex gap={8} justify='flex-end'>
          {type !== 'issue' && (
            <button
              type='button'
              className={styles.button}
              data-color='white'
              onClick={close}
            >
              <label>{t('toast.cancel')}</label>
            </button>
          )}
          <button type='button' className={styles.button} onClick={onClick}>
            <label>{t('toast.yes')}</label>
          </button>
        </Flex>
      ) : (
        <Flex gap={8} justify='flex-end'>
          <button type='button' className={styles.button} onClick={close}>
            <label>{t('toast.retry')}</label>
          </button>
        </Flex>
      )}
    </Flex>
  );
}
