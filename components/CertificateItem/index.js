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
    <div className={styles.item}>
      <div className={styles.info}>
        <RemoteImage src={image} shape='certificate' />
        <div className={styles.text}>
          <span className={styles.name}>{name}</span>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
      <div className={styles.longData}>
        <span>{companyName}</span>
      </div>
      <div className={styles.longData}>
        <span>{category}</span>
      </div>
      <div className={styles.shortData}>
        <span>{issueNum}</span>
      </div>
      <div className={styles.date}>
        <span>{startDate}</span>
      </div>
      <div className={styles.date}>
        <span>{endDate}</span>
      </div>
    </div>
  );
}
