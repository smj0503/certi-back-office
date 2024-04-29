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
        <span>{date}</span>
      </div>
    </Flex>
  );
}
