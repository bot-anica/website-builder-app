const styles = {
  accordionWrapper: 'bg-white overflow-hidden',
  maxWidths: {
    full: 'max-w-full',
    medium: 'max-w-xl md:max-w-4xl lg:max-w-7xl',
    small: 'max-w-lg md:max-w-2xl lg:max-w-4xl',
    extraSmall: 'max-w-md md:max-w-xl lg:max-w-2xl',
  },
  fieldHeights: {
    small: 'h-12 sm:h-12 md:h-14 lg:h-16 xl:h-18',
    medium: 'h-16 sm:h-16 md:h-18 lg:h-20 xl:h-22',
    large: 'h-20 sm:h-22 md:h-26 lg:h-28 xl:h-30',
  },
  accordionButton:
    'w-full pr-5 flex items-center justify-between border-none border-generic-grey bg-transparent rounded-none',
  titleColor: 'text-matt-black',
  titleSizes: {
    small: 'p-small md:text-h7 lg:text-h6',
    medium: 'p-small md:text-h6 lg:text-h5',
    large: 'text-h7 md:text-h6 lg:text-h5',
  },
  titleWeights: {
    default: 'font-normal',
    bold: 'font-bold',
  },
  accordionContentWrapper: 'p-4',
  accordionContent: 'font-manrope text-p-small text-text-light',
};

export default styles;
