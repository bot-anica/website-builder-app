import React, { JSX } from 'react';
import BaseButton, { CoreButtonProps } from './BaseButton';

interface IconButtonProps {
  icon: ({ className }: { className: string }) => JSX.Element;
}

type IconOnlyButtonProps = CoreButtonProps & IconButtonProps;

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
      additionalStyles={`${twStyles.default} ${twStyles[size]} ${variant === 'tertiary' ? twStyles[`${variant}-${state}`] : ''}`}
      additionalHoverStyles={
        variant === 'tertiary' ? twStyles[`${variant}-${state}-hover`] : ''
      }
    >
      <IconComponent className={twStyles.icon} />
    </BaseButton>
  );
};

const twStyles = {
  default: 'rounded-sm flex items-center justify-center',

  large: 'w-12 h-12',
  medium: 'w-12 h-12',
  small: 'w-10 h-10',
  'extra-small': 'w-8 h-8',

  'tertiary-default': 'bg-blue-moon bg-opacity-20 text-blue-moon',
  'tertiary-inactive': 'bg-off-white text-light-grey cursor-not-allowed',
  'tertiary-destructive': 'bg-accent-red bg-opacity-20 text-accent-red',

  'tertiary-default-hover': 'hover:bg-off-white hover:bg-opacity-100',
  'tertiary-inactive-hover': '',
  'tertiary-destructive-hover': 'hover:bg-off-white hover:bg-opacity-100',

  icon: 'text-base',
};

export default IconButton;
