import useTranslation from 'next-translate/useTranslation';
import { useRef, useState } from 'react';
import { Flex } from 'antd';
import styles from './ImageUploader.module.css';
import IconPhoto from '../../public/assets/icon-photo.svg';

export default function ({ label, setImage, selectable = true }) {
  const { t } = useTranslation('common');

  const imageSelector = useRef();
  const [photo, setPhoto] = useState('');

  const _onChange = (e) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;
      setPhoto(data);
    };

    setImage(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);
  };

  const _onClick = () => {
    imageSelector.current.click();
  };

  return (
    <Flex vertical gap={12} className={styles.container}>
      <Flex vertical gap={4}>
        <span className={styles.label}>{label}</span>
        {selectable && (
          <span
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: t('register.fileTypes') }}
          />
        )}
      </Flex>

      <Flex align='center' justify='center' className={styles.selector}>
        <input
          type='file'
          className={styles.file}
          ref={imageSelector}
          onChange={_onChange}
        />
        {photo ? (
          <img src={photo} alt='test' className={styles.img} />
        ) : (
          <button
            type='button'
            className={styles.uploadButton}
            onClick={_onClick}
            data-button-animation={true}
          >
            <IconPhoto />
          </button>
        )}
      </Flex>
    </Flex>
  );
}
