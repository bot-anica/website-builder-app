import React from 'react';
import styles from '../InputField.styles';

interface InputLabelProps {
  name: string;
  label: string;
  required?: boolean;
}

export const InputLabel: React.FC<InputLabelProps> = ({
  name,
  label,
  required,
}) => {
  return (
    <label htmlFor={name} className={styles.label}>
      {label}
      {required && <span className={styles.required}> *</span>}
    </label>
  );
};

export default InputLabel;
