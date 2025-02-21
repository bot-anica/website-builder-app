export const hoverEffects = {
  default: 'group-hover:bg-gradient-to-t from-black/75 to-black/0',
  withIcon: 'group-hover:bg-blue-moon group-hover:bg-opacity-80',
  withoutIcon: 'group-hover:bg-blue-moon group-hover:bg-opacity-80',
};

export const hoverTextPosition = {
  default: 'bottom-12',
  withIcon: 'top-1/2 -translate-x-1/2',
  withoutIcon: 'top-1/2 -translate-x-1/2',
};

export const cardStyles = {
  wrapper:
    'group relative overflow-hidden hover:shadow-lg hover:cursor-pointer transition-all duration-300',
  withBorder: 'border border-light-grey',
  imageContainer: 'h-96 relative',
  image: 'w-full h-full object-cover',
  overlay:
    'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
  textContainer:
    'flex items-center gap-2 text-white absolute left-1/2 -translate-x-1/2',
  readMoreText: 'font-semibold font-manrope text-2xl',
  contentWrapper: 'p-4',
  date: 'text-sm text-gray-500 mb-2 block',
  title: 'text-base font-medium text-gray-900 mb-2',
  description: 'text-sm text-gray-600',
};
