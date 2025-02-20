import React from 'react';
import HintIcon from '../../assets/icons/HintIcon';

interface InputFieldProps {
  // Default props
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;

  // Additional props
  showSubmitButton?: boolean;
  handleSubmit?: () => void;

  // Status props
  hint?: string;
  status?: 'default' | 'warning' | 'error' | 'success';
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
  disabled,
  showSubmitButton,
  handleSubmit,
  hint,
  status = 'default',
}) => {
  const fieldStyles = `${twStyles.field} ${disabled ? twStyles['field-disabled'] : ''}`;
  const inputWrapperStyles = `${twStyles['input-wrapper']} ${twStyles[`input-wrapper-${status}`]}`;
  const hintStyles = `${twStyles.hint} ${twStyles[`hint-${status}`]}`;

  return (
    <div className={fieldStyles}>
      <label htmlFor={name} className={twStyles.label}>
        {label}
        {required && <span className={twStyles.required}> *</span>}
      </label>
      <div className={inputWrapperStyles}>
        <input
          className={twStyles.input}
          id={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
        {showSubmitButton ? (
          <button className={twStyles['submit-button']} onClick={handleSubmit}>
            Submit
          </button>
        ) : null}
      </div>
      {hint && (
        <div className={twStyles['hint-wrapper']}>
          {<HintIcon className={twStyles['hint-icon']} />}
          <span className={hintStyles}>{hint}</span>
        </div>
      )}
    </div>
  );
};

const twStyles = {
  field: 'flex flex-col gap-4',
  'field-disabled': 'opacity-40',

  label: 'text-base font-bold text-text-light',
  'label-disabled': 'text-generic-grey',

  required: 'text-accent-red',

  'input-wrapper':
    'relative flex items-center gap-3 min-w-96 h-20 px-4 border bg-matt-black text-white',
  'input-wrapper-default':
    'border border-text-light hover:shadow-default focus-within:shadow-default',
  'input-wrapper-warning':
    'border border-accent-yellow hover:shadow-warning focus-within:shadow-warning',
  'input-wrapper-error':
    'border border-accent-red hover:shadow-error focus-within:shadow-error',
  'input-wrapper-success':
    'border border-accent-green hover:shadow-success focus-within:shadow-success',

  input: 'flex-1 bg-transparent border-none outline-none text-white',

  'submit-button':
    'bg-transparent border-none outline-none text-white px-0 py-4 focus:outline-none focus:bg-text-light focus:bg-opacity-20',

  'hint-wrapper': 'flex items-center gap-3',
  'hint-icon': 'text-base text-text-light text-accent-green',
  hint: 'text-cta',
  'hint-default': 'text-text-light',
  'hint-warning': 'text-accent-yellow',
  'hint-error': 'text-accent-red',
  'hint-success': 'text-accent-green',
};

export default InputField;
