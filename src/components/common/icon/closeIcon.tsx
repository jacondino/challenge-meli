import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './style.module.scss';

export const CloseIcon = () => {
  return (
    <span className={styles.icon}>
      <FontAwesomeIcon icon={faXmark as IconProp} />
    </span>
  );
};
