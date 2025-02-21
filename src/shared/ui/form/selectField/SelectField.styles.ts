const styles = {
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

  'selected-value': 'w-full px-4 flex justify-between items-center',
  'value-container': 'flex gap-2 items-center',
  'calendar-icon': 'text-text-light w-6 h-6',
  'chevron-icon': 'text-white w-5 h-5 transition',
  'chevron-rotated': 'rotate-180',

  dropdown:
    'absolute top-20 left-[-1px] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700',
  'dropdown-item': 'min-w-96 h-14 border bg-matt-black text-white',
  'dropdown-button':
    'bg-transparent w-full h-full flex items-center gap-2 rounded-none hover:bg-text-light hover:bg-opacity-20 hover:ring-0 hover:outline-none focus:bg-text-light focus:outline-none',
  'dropdown-text': 'inline-flex items-center',
};

export default styles;
