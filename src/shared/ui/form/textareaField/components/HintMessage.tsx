import React from 'react';
import { StatusType } from '../types';
import HintIcon from '../../../../assets/icons/HintIcon';
import styles from '../TextareaField.styles';

interface HintMessageProps {
  hint?: string;
  status: StatusType;
}

export const HintMessage: React.FC<HintMessageProps> = ({ hint, status }) => {
  if (!hint) return null;

  const hintStyles = `${styles.hint} ${styles[`hint-${status}`]}`;

  return (
    <div className={styles['hint-wrapper']}>
      <HintIcon className={styles['hint-icon']} />
      <span className={hintStyles}>{hint}</span>
    </div>
  );
};
