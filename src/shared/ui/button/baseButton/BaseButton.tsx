import React from 'react';

import { CoreButtonProps } from './types';

import styles from './BaseButton.styles';

const BaseButton: React.FC<CoreButtonProps> = ({
  variant,
  size,
  state,
  additionalStyles,
  additionalHoverStyles,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${styles.common}
        ${styles[`${variant}-${state}`]}
        ${styles[`${size}`]}
        ${additionalStyles}
        ${styles[`${variant}-${state}-hover`]}
        ${additionalHoverStyles}
      `}
    >
      {children}
    </button>
  );
};

export default BaseButton;
