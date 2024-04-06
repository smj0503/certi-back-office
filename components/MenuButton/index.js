import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './MenuButton.module.css';

export default function ({
  icon,
  onClick,
  href,
  leftPadding = false,
  children,
}) {
  const router = useRouter();

  const _onClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      href={href}
      className={styles.button}
      data-left={leftPadding}
      data-selected={href === router.asPath}
      data-button-animation={true}
    >
      {icon}
      <span className={styles.title}>{children}</span>
    </Link>
  );
}
