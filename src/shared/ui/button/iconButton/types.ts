import { JSX } from 'react';
import { CoreButtonProps } from '../baseButton/types';

export interface IconButtonProps {
  icon: ({ className }: { className: string }) => JSX.Element;
}

export type IconOnlyButtonProps = CoreButtonProps & IconButtonProps;
