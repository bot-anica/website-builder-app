import React from 'react';
import styles from './TextareaField.styles';
import { TextareaFieldProps } from './types';
import { TextareaLabel } from './components/TextareaLabel';
import { TextareaWrapper } from './components/TextareaWrapper';
import { HintMessage } from './components/HintMessage';

const TextareaField: React.FC<TextareaFieldProps> = ({
  name,
  label,
  value,
  onChange,
  rows,
  placeholder,
  required,
  disabled,
  showSubmitButton,
  handleSubmit,
  hint,
  status = 'default',
}) => {
  const fieldStyles = `${styles.field} ${disabled ? styles['field-disabled'] : ''}`;

  return (
    <div className={fieldStyles}>
      <TextareaLabel name={name} label={label} required={required} />
      <TextareaWrapper
        status={status}
        showSubmitButton={showSubmitButton}
        handleSubmit={handleSubmit}
      >
        <textarea
          className={styles.input}
          id={name}
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
      </TextareaWrapper>
      <HintMessage hint={hint} status={status} />
    </div>
  );
};

export default TextareaField;
