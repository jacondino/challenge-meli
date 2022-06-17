import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './style.module.scss';

export const LoadIcon = () => {
  return (
    <span className={styles.icon}>
      <FontAwesomeIcon icon={faSpinner as IconProp} />
    </span>
  );
};
