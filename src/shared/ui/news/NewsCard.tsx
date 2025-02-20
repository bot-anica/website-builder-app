import ExpandIcon from '../../assets/icons/ExpandIcon';

type CardSize = 'small' | 'medium' | 'large' | 'extraLarge';

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  preview?: string;
  onClick?: () => void;
  withBorder?: boolean;
  hoverEffectVariant?: 'default' | 'withIcon' | 'withoutIcon';
  size?: CardSize;
  showReadMoreButton?: boolean;
}

const NewsCard = ({
  image,
  title,
  date,
  preview,
  onClick,
  withBorder = false,
  hoverEffectVariant = 'default',
  size = 'medium',
  showReadMoreButton,
}: NewsCardProps) => {
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

  const imageHeights = {
    small: 'h-48',
    medium: 'h-64',
    large: 'h-80',
    extraLarge: 'h-96',
  };

  const titleSizes = {
    small: 'text-h6',
    medium: 'text-h6',
    large: 'text-h4',
    extraLarge: 'text-h3',
  };

  return (
    <div
      className={`
        group relative overflow-hidden 
        ${withBorder ? 'border border-light-grey' : ''} 
        hover:shadow-lg hover:cursor-pointer transition-all duration-300
      `}
      onClick={onClick}
    >
      <div className={`relative ${imageHeights[size]}`}>
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
              Read more
            </span>
          </div>
        </div>
      </div>
      <div className="px-5 py-6 w-full">
        <div className="w-full">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
            <span>{date}</span>
          </div>
          <h3
            className={`${titleSizes[size]} font-semibold text-gray-900 mb-3`}
          >
            {title}
          </h3>
          {preview && <p className="text-gray-600 line-clamp-3">{preview}</p>}
          {showReadMoreButton && (
            <button className="text-matt-black text-sm font-semibold mt-4 px-1 py-1 bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-blue-moon rounded-none hover:bg-blue-moon hover:bg-opacity-10 transition">
              Read more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
