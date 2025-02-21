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

export const imageHeights = {
  small: 'h-48',
  medium: 'h-64',
  large: 'h-80',
  extraLarge: 'h-96',
};

export const titleSizes = {
  small: 'text-h6',
  medium: 'text-h6',
  large: 'text-h4',
  extraLarge: 'text-h3',
};

export const cardStyles = {
  wrapper:
    'group relative overflow-hidden hover:shadow-lg hover:cursor-pointer transition-all duration-300',
  withBorder: 'border border-light-grey',
  imageContainer: 'relative',
  image: 'w-full h-full object-cover',
  overlay:
    'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
  textContainer:
    'flex items-center gap-2 text-white absolute left-1/2 -translate-x-1/2',
  readMoreText: 'font-semibold font-manrope text-2xl',
  contentWrapper: 'px-5 py-6 w-full',
  contentContainer: 'w-full',
  metaContainer: 'flex items-center gap-2 text-gray-500 text-sm mb-3',
  title: 'font-semibold text-gray-900 mb-3',
  preview: 'text-gray-600 line-clamp-3',
  readMoreButton:
    'text-matt-black text-sm font-semibold mt-4 px-1 py-1 bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-blue-moon rounded-none hover:bg-blue-moon hover:bg-opacity-10 transition',
};
