import { FC } from 'react';
import styles from './style.module.scss';

interface InputProps {
  label: string;
  onChange(value: boolean): void;
  value: boolean;
}

export const Checkbox: FC<InputProps> = ({ label, value, onChange }) => {
  const handleValue = (e: any) => {
    onChange(e?.target.value);
  };

  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id="checkbox"
        name="checkbox"
        onChange={(value) => handleValue(value)}
        checked={value}
      />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
};
