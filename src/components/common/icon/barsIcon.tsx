import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './style.module.scss';

export const BarsIcon = () => {
  return (
    <span className={styles.icon}>
      <FontAwesomeIcon icon={faBars as IconProp} />
    </span>
  );
};
