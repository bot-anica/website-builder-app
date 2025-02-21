import { JSX } from 'react';
import { CoreButtonProps } from '../baseButton/types';

export type ButtonType = 'rounded' | 'rounded-full';
export type IconComponent = ({
  className,
}: {
  className: string;
}) => JSX.Element;
export type IconPosition = 'left' | 'right';

export interface StandardButtonProps {
  type?: ButtonType;
  icon?: IconComponent;
  iconPosition?: IconPosition;
}

export type StandardButtonPropsType = CoreButtonProps & StandardButtonProps;
