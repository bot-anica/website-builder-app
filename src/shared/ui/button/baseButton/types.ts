import { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'large' | 'medium' | 'small' | 'extra-small';
export type ButtonState = 'default' | 'inactive' | 'destructive';

export interface CoreButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  state: ButtonState;
  additionalStyles?: string;
  additionalHoverStyles?: string;
  onClick?: () => void;
  children?: ReactNode;
}
