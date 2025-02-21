import { Size, HoverEffectVariant } from '../types';

import {
  hoverEffects,
  hoverTextPosition,
  cardStyles,
  imageHeights,
} from '../NewsCard.styles';

import ExpandIcon from '../../../../assets/icons/ExpandIcon';

interface CardImageProps {
  image: string;
  title: string;
  hoverEffectVariant: HoverEffectVariant;
  imageSize: Size;
}

const CardImage = ({
  image,
  title,
  hoverEffectVariant,
  imageSize,
}: CardImageProps) => {
  return (
    <div className={`${cardStyles.imageContainer} ${imageHeights[imageSize]}`}>
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
