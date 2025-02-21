import React from 'react';
import { twMerge } from 'tailwind-merge';

import HintIcon from '../../../../assets/icons/HintIcon';

import { StatusType } from '../types';

import styles from '../InputField.styles';

interface HintMessageProps {
  hint?: string;
  status: StatusType;
}

export const HintMessage: React.FC<HintMessageProps> = ({ hint, status }) => {
  if (!hint) return null;

  return (
    <div className={styles['hint-wrapper']}>
      <HintIcon className={styles['hint-icon']} />
      <span className={twMerge(styles.hint, styles[`hint-${status}`])}>
        {hint}
      </span>
    </div>
  );
};

export default HintMessage;
