import { JSX } from 'react';
import BaseButton, { CoreButtonProps } from './BaseButton';

interface StandardButtonProps {
  type?: 'rounded' | 'rounded-full';
  icon?: ({ className }: { className: string }) => JSX.Element;
  iconPosition?: 'left' | 'right';
}

type StandardButtonPropsType = CoreButtonProps & StandardButtonProps;

function StandardButton({
  type = 'rounded',
  variant,
  size,
  state,
  onClick,
  children,
  icon,
  iconPosition,
}: StandardButtonPropsType) {
  const iconStyles = `${twStyles[`icon-${variant}-${state}`]} ${twStyles.icon}`;

  const IconComponent:
    | (({ className }: { className: string }) => JSX.Element)
    | undefined = icon;

  return (
    <BaseButton
      variant={variant}
      size={size}
      state={state}
      onClick={onClick}
      additionalStyles={`${twStyles.default} ${twStyles[size]} ${twStyles[type]}`}
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

StandardButton.defaultProps = {
  iconPosition: 'left',
};

const twStyles = {
  default: 'rounded-full flex items-center justify-center gap-1 outline-none',

  rounded: 'rounded',
  'rounded-full': 'rounded-full',

  large: 'px-6 py-3',
  medium: 'px-6 py-3',
  small: 'px-4 py-2',
  'extra-small': 'px-4 py-1.5',

  icon: 'text-sm',

  'icon-primary-default': 'fill-off-white',
  'icon-primary-inactive': 'fill-generic-grey',
  'icon-primary-destructive': 'fill-off-white',

  'icon-secondary-default': 'fill-matt-black',
  'icon-secondary-inactive': 'fill-light-grey',
  'icon-secondary-destructive': 'fill-accent-red',

  'icon-tertiary-default': 'fill-matt-black',
  'icon-tertiary-inactive': 'fill-light-grey',
  'icon-tertiary-destructive': 'fill-accent-red',
};

export default StandardButton;
