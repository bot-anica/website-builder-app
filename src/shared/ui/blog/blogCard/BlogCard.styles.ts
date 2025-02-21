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
  imageContainer: 'h-64 relative',
  image: 'w-full h-full object-cover',
  overlay:
    'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
  textContainer:
    'flex items-center gap-2 text-white absolute left-1/2 -translate-x-1/2',
  readMoreText: 'font-semibold font-manrope text-2xl',
  contentWrapper: 'p-6 px-5',
  contentContainer: 'max-w-[390px] mx-auto',
  metaContainer: 'flex items-center gap-2 text-gray-500 text-sm mb-3',
  title: 'text-xl font-semibold text-gray-900 mb-3',
  preview: 'text-gray-600 line-clamp-3',
};
