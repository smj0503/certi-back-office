import styles from './RemoteImage.module.css';

export default function ({ src, shape }) {
  return (
    <div className={styles.container} data-shape={shape}>
      {src && <img src={src} alt={`${shape} image`} className={styles.img} />}
    </div>
  );
}
