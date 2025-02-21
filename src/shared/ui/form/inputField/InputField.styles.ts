const styles = {
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

export default styles;
