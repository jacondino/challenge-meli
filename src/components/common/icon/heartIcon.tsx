import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './style.module.scss';

export const HeartIcon = () => {
  return (
    <span className={styles.icon}>
      <FontAwesomeIcon icon={faHeart as IconProp} />
    </span>
  );
};
