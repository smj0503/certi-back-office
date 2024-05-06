import useTranslation from 'next-translate/useTranslation';
import { Flex } from 'antd';
import styles from './Toast.module.css';
import IconCheck from '../../public/assets/icon-check.svg';
import IconWarning from '../../public/assets/icon-warning.svg';

export default function ({ state, onClick, close }) {
  const { t } = useTranslation('common');

  return (
    <Flex vertical gap={32} className={styles.toast}>
      <Flex align='center' gap={20}>
        {state ? <IconCheck /> : <IconWarning />}
        <Flex vertical gap={8}>
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
        </Flex>
      </Flex>
      {state ? (
        <Flex gap={8} justify='flex-end'>
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
