import { twMerge } from 'tailwind-merge';
import HintIcon from '../../../../assets/icons/HintIcon';

import styles from '../SelectField.styles';

import { StatusType } from '../types';

interface HintMessageProps {
  hint?: string;
  status?: StatusType;
}

function HintMessage({ hint, status = 'default' }: HintMessageProps) {
  if (!hint) return null;

  const hintStyles = twMerge(styles.hint, styles[`hint-${status}`]);

  return (
    <div className={styles['hint-wrapper']}>
      <HintIcon className={styles['hint-icon']} />
      <span className={hintStyles}>{hint}</span>
    </div>
  );
}

export default HintMessage;
