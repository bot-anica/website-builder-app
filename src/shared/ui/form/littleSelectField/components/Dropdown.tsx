import { twMerge } from 'tailwind-merge';

import { SelectType } from '../types';

import styles from '../LittleSelectField.styles';

interface DropdownProps<T> {
  type: SelectType;
  options: Array<T>;
  optionKey?: string;
  onSelect: (option: T | undefined) => void;
  getValue: (optionKey: string | undefined, option: T | undefined) => string;
}

function Dropdown<T>({
  type,
  options,
  optionKey,
  onSelect,
  getValue,
}: DropdownProps<T>) {
  return (
    <div
      className={twMerge(
        styles['dropdown-wrapper'],
        type === 'rounded' && styles['input-wrapper-rounded'],
      )}
    >
      <ul className={styles['dropdown-list']}>
        <li className={styles['dropdown-item']}>
          <button
            type="button"
            onClick={() => onSelect(undefined)}
            className={styles['dropdown-button-center']}
          >
            <div className={styles['dropdown-item-content']}>&#8212;</div>
          </button>
        </li>
        {options.map((option, index) => (
          <li
            key={index}
            className={twMerge(
              index === options.length - 1
                ? styles['dropdown-item-last']
                : styles['dropdown-item'],
            )}
          >
            <button
              type="button"
              onClick={() => onSelect(option)}
              className={styles['dropdown-button']}
            >
              <div className={styles['dropdown-item-content']}>
                {getValue(optionKey, option)}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
