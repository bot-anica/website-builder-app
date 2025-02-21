import ExpandIcon from '../../../../assets/icons/ExpandIcon';
import {
  cardStyles,
  hoverEffects,
  hoverTextPosition,
} from '../GalleryCard.styles';

import { HoverEffectVariant } from '../types';

interface CardImageProps {
  image: string;
  title: string;
  hoverEffectVariant: HoverEffectVariant;
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
          <span className={cardStyles.readMoreText}>Learn more</span>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
