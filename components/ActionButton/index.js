import styles from './ActionButton.module.css';

export default function ({
  onClick,
  width,
  children,
  type = 'button',
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ width: width }}
      className={styles.button}
      disabled={disabled}
      data-button-animation={!disabled}
    >
      <span className={styles.title}>{children}</span>
    </button>
  );
}
