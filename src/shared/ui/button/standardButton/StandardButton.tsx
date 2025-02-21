import { JSX } from 'react';

import BaseButton from '../baseButton/BaseButton';

import { StandardButtonPropsType } from './types';

import styles from './StandardButton.styles';

function StandardButton({
  type = 'rounded',
  variant,
  size,
  state,
  onClick,
  children,
  icon,
  iconPosition = 'left',
}: StandardButtonPropsType) {
  const iconStyles = `${styles[`icon-${variant}-${state}`]} ${styles.icon}`;

  const IconComponent:
    | (({ className }: { className: string }) => JSX.Element)
    | undefined = icon;

  return (
    <BaseButton
      variant={variant}
      size={size}
      state={state}
      onClick={onClick}
      additionalStyles={`${styles.default} ${styles[size]} ${styles[type]}`}
    >
      {icon && iconPosition === 'left' && IconComponent && (
        <IconComponent className={iconStyles} />
      )}
      {children}
      {icon && iconPosition === 'right' && IconComponent && (
        <IconComponent className={iconStyles} />
      )}
    </BaseButton>
  );
}

export default StandardButton;
