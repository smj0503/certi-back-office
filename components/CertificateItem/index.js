import { Flex } from 'antd';
import RemoteImage from '@/components/RemoteImage';
import styles from './CertificateItem.module.css';
import dayjs from 'dayjs';

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
  const renderDate = (date) => {
    const tempDate = new Date(date * 1000);
    return dayjs(tempDate).format('YYYY.MM.DD');
  };

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
        <span>{renderDate(startDate)}</span>
      </Flex>
      <Flex align='center' className={styles.date}>
        <span>{renderDate(endDate)}</span>
      </Flex>
    </Flex>
  );
}
