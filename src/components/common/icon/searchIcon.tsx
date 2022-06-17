import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './style.module.scss';

export const SearchIcon = () => {
  return (
    <span className={styles.icon}>
      <FontAwesomeIcon icon={faSearch as IconProp} />
    </span>
  );
};
