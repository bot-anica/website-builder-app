import React from 'react';
import { twMerge } from 'tailwind-merge';

import { ContainerProps } from './types';

import styles from './Container.styles';

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return <div className={twMerge(styles.base, className)}>{children}</div>;
};
