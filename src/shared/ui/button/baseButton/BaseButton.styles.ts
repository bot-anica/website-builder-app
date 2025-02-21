const styles = {
  common: 'p-0 m-0',

  rounded: 'rounded',
  'rounded-full': 'rounded-full',

  'primary-default': 'bg-blue-moon border-blue-moon text-off-white',
  'primary-inactive':
    'bg-light-grey border-light-grey text-generic-grey cursor-not-allowed',
  'primary-destructive': 'bg-accent-red border-accent-red text-off-white',

  'secondary-default': 'bg-transparent border-light-grey text-matt-black',
  'secondary-inactive':
    'bg-transparent border-light-grey text-light-grey cursor-not-allowed',
  'secondary-destructive': 'bg-transparent border-accent-red text-accent-red',

  'tertiary-default': 'bg-blue-moon bg-opacity-20 text-matt-black',
  'tertiary-inactive':
    'bg-off-white text-light-grey text-generic-grey cursor-not-allowed',
  'tertiary-destructive': 'bg-accent-red bg-opacity-20 text-accent-red',

  'primary-default-hover': 'hover:bg-dark-moon hover:border-dark-moon',
  'primary-inactive-hover': 'hover:border-light-grey',
  'primary-destructive-hover': 'hover:bg-dark-red hover:border-dark-red',

  'secondary-default-hover': 'hover:bg-off-white hover:border-light-grey',
  'secondary-inactive-hover': ' hover:border-light-grey',
  'secondary-destructive-hover':
    'hover:bg-accent-red hover:bg-opacity-10 hover:border-accent-red',

  'tertiary-default-hover':
    'hover:bg-blue-moon hover:bg-opacity-10 hover:border-transparent',
  'tertiary-inactive-hover': 'hover:border-transparent',
  'tertiary-destructive-hover':
    'hover:bg-accent-red hover:bg-opacity-10 hover:border-transparent',

  large: 'font-manrope font-medium text-cta text-md',
  medium: 'font-manrope font-medium text-cta text-sm',
  small: 'font-manrope font-medium text-cta text-md',
  'extra-small': 'font-manrope font-medium text-cta text-sm',
};

export default styles;
