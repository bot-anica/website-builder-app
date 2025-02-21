import React from 'react';
import styles from '../TextareaField.styles';

interface TextareaLabelProps {
  name: string;
  label: string;
  required?: boolean;
}

export const TextareaLabel: React.FC<TextareaLabelProps> = ({
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
