import CalendarIcon from '../../../../assets/icons/CalendarIcon';
import ChevronDownIcon from '../../../../assets/icons/ChevronDownIcon';
import { twMerge } from 'tailwind-merge';

import styles from '../SelectField.styles';

interface ValueContainerProps<T> {
  value: T | undefined;
  placeholder?: string;
  optionKey?: string;
  isOpen: boolean;
  getValue: (optionKey: string | undefined, option: T) => string;
}

function ValueContainer<T>({
  value,
  placeholder,
  optionKey,
  isOpen,
  getValue,
}: ValueContainerProps<T>) {
  return (
    <div className={styles['selected-value']}>
      <div className={styles['value-container']}>
        <CalendarIcon className={styles['calendar-icon']} />
        {value ? getValue(optionKey, value) : placeholder}
      </div>
      <ChevronDownIcon
        className={twMerge(
          styles['chevron-icon'],
          isOpen && styles['chevron-rotated'],
        )}
      />
    </div>
  );
}

export default ValueContainer;
