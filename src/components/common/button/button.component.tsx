import { FC, ReactElement } from 'react';
import styles from './style.module.scss';

interface ButtonProps {
  label: string | ReactElement;
  color?: 'primary' | 'secondary' | 'transparent';
  size?: 'small' | 'medium' | 'large';
  onClick(): void;
}

export const Button: FC<ButtonProps> = ({
  label,
  color = 'primary',
  size = 'medium',
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[`button__${color}`]} ${
        styles[`button__${size}`]
      }`}
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};
