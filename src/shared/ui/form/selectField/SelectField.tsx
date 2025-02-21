import { useState, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useOutsideClick } from '../../../lib/hooks';

import { SelectFieldProps } from './types';
import styles from './SelectField.styles';
import Dropdown from './components/Dropdown';
import Label from './components/Label';
import ValueContainer from './components/ValueContainer';
import HintMessage from './components/HintMessage';

import { getValue } from './utils';

function SelectField<T>({
  name,
  label,
  value,
  onSelect,
  options,
  optionKey,
  placeholder,
  required,
  disabled,
  hint,
  status = 'default',
}: SelectFieldProps<T>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLSelectElement>(null);
  const fieldWrapperRef = useOutsideClick(() => {
    setIsOpen(false);
  });

  const handleSelect = (option: T) => {
    onSelect(option);
    setIsOpen(false);
    // Update hidden select value
    if (selectRef.current) {
      selectRef.current.value = String(getValue<T>(optionKey, option));
    }
  };

  const fieldStyles = twMerge(
    styles.field,
    disabled && styles['field-disabled'],
  );
  const inputWrapperStyles = twMerge(
    styles['input-wrapper'],
    styles[`input-wrapper-${status}`],
  );

  return (
    <div
      ref={fieldWrapperRef}
      className={fieldStyles}
      onClick={() => (disabled ? null : setIsOpen(!isOpen))}
    >
      <Label name={name} label={label} required={required} />

      <div className={inputWrapperStyles}>
        <ValueContainer
          value={value}
          placeholder={placeholder}
          optionKey={optionKey}
          isOpen={isOpen}
          getValue={getValue}
        />
        {isOpen && (
          <Dropdown
            options={options}
            optionKey={optionKey}
            onSelect={handleSelect}
            getValue={getValue}
          />
        )}
        <select
          ref={selectRef}
          className="hidden"
          id={name}
          value={value ? getValue(optionKey, value) : ''}
          required={required}
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
      </div>
      <HintMessage hint={hint} status={status} />
    </div>
  );
}

export default SelectField;
