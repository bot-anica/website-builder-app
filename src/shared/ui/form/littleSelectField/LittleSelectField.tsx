import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { getStyleConfig } from './styleConfig';

import { LittleSelectFieldProps } from './types';

import styles from './LittleSelectField.styles';

import ChevronDownIcon from '../../../assets/icons/ChevronDownIcon';
import { useOutsideClick } from '../../../lib/hooks';
import Dropdown from './components/Dropdown';

function getValue<T>(optionKey: string | undefined, option: T | undefined) {
  if (option === undefined) {
    return '';
  } else {
    return optionKey &&
      typeof option === 'object' &&
      option !== null &&
      optionKey in option
      ? String((option as Record<string, unknown>)[optionKey])
      : String(option);
  }
}

function LittleSelectField<T>({
  type = 'square',
  name,
  value,
  onSelect,
  options,
  optionKey,
  placeholder,
  disabled,
  hasError,
}: LittleSelectFieldProps<T>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLSelectElement>(null);
  const fieldWrapperRef = useOutsideClick(() => {
    setIsOpen(false);
  });

  const handleSelect = (option: T | undefined) => {
    onSelect(option);
    setIsOpen(false);
    // Update hidden select value
    if (selectRef.current) {
      selectRef.current.value = String(getValue<T>(optionKey, option));
    }
  };

  const { fieldStyles, inputWrapperStyles } = getStyleConfig({
    type,
    value,
    hasError,
    disabled,
  });

  return (
    <div
      ref={fieldWrapperRef}
      className={fieldStyles}
      onClick={() => (disabled ? null : setIsOpen(!isOpen))}
    >
      <label htmlFor={name}>
        <select
          ref={selectRef}
          className="hidden"
          id={name}
          value={value ? getValue(optionKey, value) : ''}
          disabled={disabled}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={index} value={getValue(optionKey, option)}>
              {getValue(optionKey, option)}
            </option>
          ))}
        </select>
      </label>
      <div className={inputWrapperStyles}>
        <div className={styles['selected-value']}>
          {value ? getValue<T>(optionKey, value) : placeholder}
          <ChevronDownIcon
            className={twMerge(
              hasError ? styles['chevron-error'] : styles['chevron-default'],
              isOpen && styles['chevron-rotated'],
            )}
          />
        </div>
        {isOpen && (
          <Dropdown
            type={type}
            options={options}
            optionKey={optionKey}
            onSelect={handleSelect}
            getValue={getValue}
          />
        )}
      </div>
    </div>
  );
}

export default LittleSelectField;
