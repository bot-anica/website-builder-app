import React from 'react';
import { twMerge } from 'tailwind-merge';

import { InputFieldProps } from './types';
import { InputLabel } from './components/InputLabel';
import { InputWrapper } from './components/InputWrapper';
import { HintMessage } from './components/HintMessage';

import styles from './InputField.styles';

export const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
  disabled,
  showSubmitButton,
  handleSubmit,
  hint,
  status = 'default',
}) => {
  return (
    <div
      className={twMerge(styles.field, disabled && styles['field-disabled'])}
    >
      <InputLabel name={name} label={label} required={required} />
      <InputWrapper
        status={status}
        showSubmitButton={showSubmitButton}
        handleSubmit={handleSubmit}
      >
        <input
          className={styles.input}
          id={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
      </InputWrapper>
      <HintMessage hint={hint} status={status} />
    </div>
  );
};

export default InputField;
