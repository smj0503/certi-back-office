import dayjs from 'dayjs';
import RemoteImage from '@/components/RemoteImage';
import { Flex } from 'antd';
import styles from './CompanyItem.module.css';

export default function ({
  image,
  name,
  description,
  certificateNum,
  issueNum,
  date,
}) {
  const renderDate = (date) => {
    const tempDate = new Date(date * 1000);
    return dayjs(tempDate).format('YYYY.MM.DD');
  };

  return (
    <Flex align='center' className={styles.item}>
      <div className={styles.info}>
        <RemoteImage src={image} shape='company' />
        <div className={styles.text}>
          <span className={styles.name}>{name}</span>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
      <div className={styles.data}>
        <span>{certificateNum}</span>
      </div>
      <div className={styles.data}>
        <span>{issueNum}</span>
      </div>
      <div className={styles.data}>
        <span>{renderDate(date)}</span>
      </div>
    </Flex>
  );
}
