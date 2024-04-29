import { Flex } from 'antd';
import RemoteImage from '@/components/RemoteImage';
import styles from './CertificateItem.module.css';

export default function ({
  image,
  name,
  description,
  companyName,
  category,
  issueNum,
  startDate,
  endDate,
}) {
  return (
    <Flex align='center' className={styles.item}>
      <Flex align='center' gap={12}>
        <RemoteImage src={image} shape='certificate' />
        <Flex vertical gap={6} className={styles.text}>
          <span className={styles.name}>{name}</span>
          <span className={styles.description}>{description}</span>
        </Flex>
      </Flex>
      <Flex align='center' className={styles.longData}>
        <span>{companyName}</span>
      </Flex>
      <Flex align='center' className={styles.longData}>
        <span>{category}</span>
      </Flex>
      <Flex align='center' className={styles.shortData}>
        <span>{issueNum}</span>
      </Flex>
      <Flex align='center' className={styles.date}>
        <span>{startDate}</span>
      </Flex>
      <Flex align='center' className={styles.date}>
        <span>{endDate}</span>
      </Flex>
    </Flex>
  );
}
