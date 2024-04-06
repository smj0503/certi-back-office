import styles from './StatusBox.module.css';

export default function ({ children, icon, count, color }) {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <div>
        <label className={styles.label}>{children}</label>
        {icon}
      </div>
      <span className={styles.count}>{count}</span>
    </div>
  );
}
