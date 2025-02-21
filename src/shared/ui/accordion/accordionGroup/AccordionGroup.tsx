import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './AccordionGroup.styles';

interface AccordionGroupProps {
  children: React.ReactNode;
  className?: string;
  withBackground?: boolean;
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({
  children,
  className,
  withBackground,
}) => {
  return (
    <div
      className={twMerge(
        styles.base,
        withBackground ? styles.background : '',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default AccordionGroup;
