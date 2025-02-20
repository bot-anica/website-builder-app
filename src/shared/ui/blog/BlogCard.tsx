import ExpandIcon from '../../assets/icons/ExpandIcon';

interface BlogCardProps {
  image: string;
  title: string;
  author: string;
  date: string;
  preview: string;
  onClick?: () => void;
  withBorder?: boolean;
  hoverEffectVariant?: 'default' | 'withIcon' | 'withoutIcon';
}

const BlogCard = ({
  image,
  title,
  author,
  date,
  preview,
  onClick,
  withBorder = false,
  hoverEffectVariant = 'default',
}: BlogCardProps) => {
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
        hover:shadow-lg hover:cursor-pointer transition-all duration-300
      `}
      onClick={onClick}
    >
      <div className="h-64 relative">
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
      <div className="p-6 px-5">
        <div className="max-w-[390px] mx-auto">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
            <span>{author}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 line-clamp-3">{preview}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
