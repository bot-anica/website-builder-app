import React from 'react';
import { twMerge } from 'tailwind-merge';

import { StatusType } from '../types';

import styles from '../InputField.styles';

interface InputWrapperProps {
  children: React.ReactNode;
  status: StatusType;
  showSubmitButton?: boolean;
  handleSubmit?: () => void;
}

export const InputWrapper: React.FC<InputWrapperProps> = ({
  children,
  status,
  showSubmitButton,
  handleSubmit,
}) => {
  return (
    <div
      className={twMerge(
        styles['input-wrapper'],
        styles[`input-wrapper-${status}`],
      )}
    >
      {children}
      {showSubmitButton ? (
        <button className={styles['submit-button']} onClick={handleSubmit}>
          Submit
        </button>
      ) : null}
    </div>
  );
};

export default InputWrapper;
