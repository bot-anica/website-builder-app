import { useState, useRef } from 'react';

import HintIcon from '../../assets/icons/HintIcon';
import CalendarIcon from '../../assets/icons/CalendarIcon.tsx';
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon.tsx';
import { useOutsideClick } from '../../lib/hooks.ts';

interface SelectFieldProps<T> {
  // Default props
  name: string;
  label: string;
  value: T | undefined;
  onSelect: (value: unknown) => void;
  options: Array<T>;
  optionKey?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;

  // Status props
  hint?: string;
  status?: 'default' | 'warning' | 'error' | 'success';
}

function getValue<T>(optionKey: string | undefined, option: T) {
  return optionKey &&
    typeof option === 'object' &&
    option !== null &&
    optionKey in option
    ? String((option as Record<string, unknown>)[optionKey])
    : String(option);
}

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

  const fieldStyles = `${twStyles.field} ${disabled ? twStyles['field-disabled'] : ''}`;
  const inputWrapperStyles = `${twStyles['input-wrapper']} ${twStyles[`input-wrapper-${status}`]}`;
  const hintStyles = `${twStyles.hint} ${twStyles[`hint-${status}`]}`;

  return (
    <div
      ref={fieldWrapperRef}
      className={fieldStyles}
      onClick={() => (disabled ? null : setIsOpen(!isOpen))}
    >
      <label htmlFor={name} className={twStyles.label}>
        {label}
        {required && <span className={twStyles.required}> *</span>}
      </label>

      <div className={inputWrapperStyles}>
        <div className="w-full px-4 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <CalendarIcon className="text-text-light w-6 h-6" />
            {value ? getValue<T>(optionKey, value) : placeholder}
          </div>
          <ChevronDownIcon
            className={`text-white w-5 h-5 transition${isOpen ? ' rotate-180' : ''}`}
          />
        </div>
        {isOpen && (
          <div className="absolute top-20 left-[-1px] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
            <ul>
              {options.map(option => (
                <li className="min-w-96 h-14 border bg-matt-black text-white">
                  <button
                    type="button"
                    onClick={() => handleSelect(option)}
                    className="bg-transparent w-full h-full flex items-center gap-2 rounded-none hover:bg-text-light hover:bg-opacity-20 hover:ring-0 hover:outline-none focus:bg-text-light focus:outline-none"
                  >
                    <div className="inline-flex items-center">
                      {getValue<T>(optionKey, option)}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
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
      {hint && (
        <div className={twStyles['hint-wrapper']}>
          {<HintIcon className={twStyles['hint-icon']} />}
          <span className={hintStyles}>{hint}</span>
        </div>
      )}
    </div>
  );
}

const twStyles = {
  field: 'flex flex-col gap-4',
  'field-disabled': 'opacity-40',

  label: 'text-base font-bold text-text-light',
  'label-disabled': 'text-generic-grey',

  required: 'text-accent-red',

  'input-wrapper':
    'relative flex items-center gap-3 min-w-96 h-20 border bg-matt-black text-white',
  'input-wrapper-default':
    'border border-text-light hover:shadow-default focus-within:shadow-default',
  'input-wrapper-warning':
    'border border-accent-yellow hover:shadow-warning focus-within:shadow-warning',
  'input-wrapper-error':
    'border border-accent-red hover:shadow-error focus-within:shadow-error',
  'input-wrapper-success':
    'border border-accent-green hover:shadow-success focus-within:shadow-success',

  'hint-wrapper': 'flex items-center gap-3',
  'hint-icon': 'text-base text-text-light text-accent-green',
  hint: 'text-cta',
  'hint-default': 'text-text-light',
  'hint-warning': 'text-accent-yellow',
  'hint-error': 'text-accent-red',
  'hint-success': 'text-accent-green',
};

export default SelectField;
