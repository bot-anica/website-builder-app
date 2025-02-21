import React from 'react';
import { StatusType } from '../types';
import styles from '../TextareaField.styles';

interface TextareaWrapperProps {
  status: StatusType;
  showSubmitButton?: boolean;
  handleSubmit?: () => void;
  children: React.ReactNode;
}

export const TextareaWrapper: React.FC<TextareaWrapperProps> = ({
  status,
  showSubmitButton,
  handleSubmit,
  children,
}) => {
  const inputWrapperStyles = `${styles['input-wrapper']} ${styles[`input-wrapper-${status}`]}`;

  return (
    <div className={inputWrapperStyles}>
      {children}
      {showSubmitButton ? (
        <button className={styles['submit-button']} onClick={handleSubmit}>
          Submit
        </button>
      ) : null}
    </div>
  );
};
