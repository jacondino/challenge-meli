import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './style.module.scss';

export const HeartRegularIcon = () => {
  return (
    <span className={styles.icon}>
      <FontAwesomeIcon icon={faHeart as IconProp} />
    </span>
  );
};
