import { FC } from 'react';
import { LoadIcon } from '../icon';
import styles from './style.module.scss';

export const Loader: FC = () => (
  <div className={styles.loader}>
    <LoadIcon />
  </div>
);
