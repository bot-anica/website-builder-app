import React, { JSX } from 'react';
import BaseButton from '../baseButton/BaseButton';

import { IconOnlyButtonProps } from './types';

import styles from './IconButton.styles';

const IconButton: React.FC<IconOnlyButtonProps> = ({
  variant,
  size,
  state,
  onClick,
  icon,
}) => {
  const IconComponent: ({ className }: { className: string }) => JSX.Element =
    icon;

  return (
    <BaseButton
      variant={variant}
      size={size}
      state={state}
      onClick={onClick}
      additionalStyles={`${styles.default} ${styles[size]} ${variant === 'tertiary' ? styles[`${variant}-${state}`] : ''}`}
      additionalHoverStyles={
        variant === 'tertiary' ? styles[`${variant}-${state}-hover`] : ''
      }
    >
      <IconComponent className={styles.icon} />
    </BaseButton>
  );
};

export default IconButton;
