import useTranslation from 'next-translate/useTranslation';

import styles from './IssueContainer.module.css';
import IconPhoto from '@/public/assets/icon-photo.svg';

export default function ({ image }) {
  const { t } = useTranslation('common');

  return (
    <div className={styles.imageContainer}>
      <div className={styles.header}>
        <span className={styles.label}>{t('issue.profile')}</span>
      </div>
      <div className={styles.selector}>
        {image ? (
          <img src={image} alt='test' className={styles.image} />
        ) : (
          <div className={styles.icon}>
            <IconPhoto />
          </div>
        )}
      </div>
    </div>
  );
}
