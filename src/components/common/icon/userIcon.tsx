import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './style.module.scss';

export const UserIcon = () => {
  return (
    <span className={styles.icon}>
      <FontAwesomeIcon icon={faUser as IconProp} />
    </span>
  );
};
