import { Flex } from 'antd';
import styles from './RemoteImage.module.css';

export default function ({ src, shape }) {
  return (
    <Flex
      align='center'
      justify='center'
      className={styles.container}
      data-shape={shape}
    >
      {src && <img src={src} alt={`${shape} image`} className={styles.img} />}
    </Flex>
  );
}
