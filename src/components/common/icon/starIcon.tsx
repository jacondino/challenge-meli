import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './style.module.scss';

export const StarIcon = () => {
  return (
    <span className={styles.icon}>
      <FontAwesomeIcon icon={faStar as IconProp} />
    </span>
  );
};
