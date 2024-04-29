import { Flex } from 'antd';
import styles from './Statistics.module.css';

export default function ({ children, icon, count, color }) {
  return (
    <Flex
      vertical
      gap={8}
      className={styles.item}
      style={{ backgroundColor: color }}
    >
      <Flex align='center' justify='space-between' style={{ height: 28 }}>
        <label className={styles.label}>{children}</label>
        {icon}
      </Flex>
      <span className={styles.count}>{count}</span>
    </Flex>
  );
}
