import { useRef, useState } from 'react';

import ChevronDownIcon from '../../assets/icons/ChevronDownIcon.tsx';
import { useOutsideClick } from '../../lib/hooks.ts';

interface LittleSelectFieldProps<T> {
  // Default props
  type: 'rounded' | 'square';
  name: string;
  value: T | undefined;
  onSelect: (value: unknown) => void;
  options: Array<T>;
  optionKey?: string;
  placeholder?: string;
  disabled?: boolean;

  // Status props
  hasError?: boolean;
}

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

  const fieldStyles = `${twStyles.field} ${disabled ? twStyles['field-disabled'] : ''}`;
  const inputWrapperStyles = `${twStyles['input-wrapper']} ${type === 'rounded' ? twStyles['input-wrapper-rounded'] : ''} ${
    hasError
      ? twStyles['input-wrapper-error']
      : value
        ? twStyles['input-wrapper-applied']
        : twStyles['input-wrapper-default']
  }`;

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
        <div className="px-4 flex gap-2 items-center">
          {value ? getValue<T>(optionKey, value) : placeholder}
          <ChevronDownIcon
            className={`${hasError ? 'text-accent-red' : 'text-white'} w-4 h-4 transition${isOpen ? ' rotate-180' : ''}`}
          />
        </div>
        {isOpen && (
          <div
            className={`absolute top-10 left-[-1px] right-[-1px] z-10 border border-white ${type === 'rounded' ? 'rounded-3xl overflow-hidden' : ''}`}
          >
            <ul className="w-full">
              <li className="h-10 border-b bg-matt-black text-text-light">
                <button
                  type="button"
                  onClick={() => handleSelect(undefined)}
                  className="bg-transparent w-full h-full flex items-center justify-center gap-2 px-4 rounded-none hover:bg-text-light hover:bg-opacity-20 hover:ring-0 hover:outline-none focus:bg-text-light focus:outline-none"
                >
                  <div className="inline-flex items-center">&#8212;</div>
                </button>
              </li>
              {options.map((option, index) => (
                <li
                  className={`h-10 ${index !== options.length - 1 ? 'border-b' : ''} bg-matt-black text-white`}
                >
                  <button
                    type="button"
                    onClick={() => handleSelect(option)}
                    className="bg-transparent w-full h-full flex items-center gap-2 px-4 rounded-none hover:bg-text-light hover:bg-opacity-20 hover:ring-0 hover:outline-none focus:bg-text-light focus:outline-none"
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
      </div>
    </div>
  );
}

const twStyles = {
  field: 'flex flex-col gap-4',
  'field-disabled': 'opacity-40',

  'input-wrapper': 'relative flex items-center gap-1 h-10 border',
  'input-wrapper-rounded': 'rounded-full',
  'input-wrapper-default':
    'border text-white border-light-grey bg-light-grey bg-opacity-20 transition hover:border-opacity-50 hover:bg-opacity-10 focus-within:border-blue-moon',
  'input-wrapper-applied':
    'border text-white border-blue-moon bg-blue-moon bg-opacity-20 transition hover:border-opacity-50 hover:bg-opacity-10 focus-within:border-blue-moon',
  'input-wrapper-error':
    'border text-accent-red border-accent-red bg-accent-red bg-opacity-20 transition hover:border-opacity-50 hover:bg-opacity-10 focus-within:shadow-error',
};

export default LittleSelectField;
