import { FC } from 'react';
import styles from './style.module.scss';

interface InputProps {
  placeholder?: string;
  type?: 'email' | 'password' | 'text';
  onChange(value: string): void;
  value: string;
  required?: boolean;
}

export const Input: FC<InputProps> = ({
  value,
  placeholder,
  type = 'text',
  onChange,
  required,
}) => {
  const handleValue = (e: any) => {
    onChange(e?.target.value);
  };

  return (
    <div className={styles.input}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleValue}
        value={value}
        required={required}
      />
    </div>
  );
};
