const styles = {
  field: 'flex flex-col gap-4',
  'field-disabled': 'opacity-40',

  'input-wrapper': 'relative flex items-center gap-1 h-10 border',
  'input-wrapper-rounded': 'rounded-3xl overflow-hidden',
  'input-wrapper-default':
    'border text-white border-light-grey bg-light-grey bg-opacity-20 transition hover:border-opacity-50 hover:bg-opacity-10 focus-within:border-blue-moon',
  'input-wrapper-applied':
    'border text-white border-blue-moon bg-blue-moon bg-opacity-20 transition hover:border-opacity-50 hover:bg-opacity-10 focus-within:border-blue-moon',
  'input-wrapper-error':
    'border text-accent-red border-accent-red bg-accent-red bg-opacity-20 transition hover:border-opacity-50 hover:bg-opacity-10 focus-within:shadow-error',

  'dropdown-wrapper':
    'absolute top-10 left-[-1px] right-[-1px] z-10 border border-white',
  'dropdown-list': 'w-full',
  'dropdown-item': 'h-10 border-b bg-matt-black text-white',
  'dropdown-item-last': 'h-10 bg-matt-black text-white',
  'dropdown-button':
    'bg-transparent w-full h-full flex items-center gap-2 px-4 rounded-none hover:bg-text-light hover:bg-opacity-20 hover:ring-0 hover:outline-none focus:bg-text-light focus:outline-none',
  'dropdown-button-center':
    'bg-transparent w-full h-full flex items-center justify-center gap-2 px-4 rounded-none hover:bg-text-light hover:bg-opacity-20 hover:ring-0 hover:outline-none focus:bg-text-light focus:outline-none',
  'dropdown-item-content': 'inline-flex items-center',

  'selected-value': 'px-4 flex gap-2 items-center',
  'chevron-default': 'text-white w-4 h-4 transition',
  'chevron-error': 'text-accent-red w-4 h-4 transition',
  'chevron-rotated': 'rotate-180',
};

export default styles;
