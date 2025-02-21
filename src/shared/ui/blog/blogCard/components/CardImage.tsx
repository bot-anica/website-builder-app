import ExpandIcon from '../../../../assets/icons/ExpandIcon';
import {
  hoverEffects,
  hoverTextPosition,
  cardStyles,
} from '../BlogCard.styles';

interface CardImageProps {
  image: string;
  title: string;
  hoverEffectVariant: 'default' | 'withIcon' | 'withoutIcon';
}

const CardImage = ({ image, title, hoverEffectVariant }: CardImageProps) => {
  return (
    <div className={cardStyles.imageContainer}>
      <img src={image} alt={title} className={cardStyles.image} />
      <div
        className={`${cardStyles.overlay} ${hoverEffects[hoverEffectVariant]}`}
      >
        <div
          className={`${cardStyles.textContainer} ${hoverTextPosition[hoverEffectVariant]}`}
        >
          {hoverEffectVariant === 'withIcon' && (
            <ExpandIcon className="w-6 h-6" />
          )}
          <span className={cardStyles.readMoreText}>Read more</span>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
