import ExpandIcon from '../../assets/icons/ExpandIcon';

interface GalleryCardProps {
  image: string;
  title: string;
  description?: string;
  date?: string;
  onClick?: () => void;
  withBorder?: boolean;
  hoverEffectVariant?: 'default' | 'withIcon' | 'withoutIcon';
}

const GalleryCard = ({
  image,
  title,
  description,
  date,
  onClick,
  withBorder = false,
  hoverEffectVariant = 'default',
}: GalleryCardProps) => {
  const hoverEffects = {
    default: 'group-hover:bg-gradient-to-t from-black/75 to-black/0',
    withIcon: 'group-hover:bg-blue-moon group-hover:bg-opacity-80',
    withoutIcon: 'group-hover:bg-blue-moon group-hover:bg-opacity-80',
  };

  const hoverTextPosition = {
    default: 'bottom-12',
    withIcon: 'top-1/2 -translate-x-1/2',
    withoutIcon: 'top-1/2 -translate-x-1/2',
  };

  return (
    <div
      className={`
        group relative overflow-hidden 
        ${withBorder ? 'border border-light-grey' : ''} 
        'hover:shadow-lg hover:cursor-pointer transition-all duration-300' 
      `}
      onClick={onClick}
    >
      <div className="h-96 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${hoverEffects[hoverEffectVariant]} transition-opacity duration-300`}
        >
          <div
            className={`flex items-center gap-2 text-white absolute ${hoverTextPosition[hoverEffectVariant]} left-1/2 -translate-x-1/2`}
          >
            {hoverEffectVariant === 'withIcon' && (
              <ExpandIcon className="w-6 h-6" />
            )}
            <span className="font-semibold font-manrope text-2xl">
              Learn more
            </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        {date && (
          <span className="text-sm text-gray-500 mb-2 block">{date}</span>
        )}
        <h3 className="text-base font-medium text-gray-900 mb-2">{title}</h3>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
    </div>
  );
};

export default GalleryCard;
