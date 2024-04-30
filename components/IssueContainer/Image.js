import useTranslation from 'next-translate/useTranslation';
import { Flex } from 'antd';
import styles from './IssueContainer.module.css';
import IconPhoto from '@/public/assets/icon-photo.svg';

export default function ({ image }) {
  const { t } = useTranslation('common');

  return (
    <Flex vertical gap={12} className={styles.imageContainer}>
      <Flex vertical gap={4}>
        <span className={styles.label}>{t('issue.profile')}</span>
      </Flex>
      <Flex align='center' justify='center' className={styles.selector}>
        {image ? (
          <img src={image} alt='test' className={styles.image} />
        ) : (
          <Flex align='center' justify='center' className={styles.icon}>
            <IconPhoto />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
