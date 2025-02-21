import { GalleryCardProps } from './types';

import CardImage from './components/CardImage';
import CardContent from './components/CardContent';
import { cardStyles } from './GalleryCard.styles';

const GalleryCard = ({
  image,
  title,
  description,
  date,
  onClick,
  withBorder = false,
  hoverEffectVariant = 'default',
}: GalleryCardProps) => {
  return (
    <div
      className={`${cardStyles.wrapper} ${withBorder ? cardStyles.withBorder : ''}`}
      onClick={onClick}
    >
      <CardImage
        image={image}
        title={title}
        hoverEffectVariant={hoverEffectVariant}
      />
      <CardContent title={title} description={description} date={date} />
    </div>
  );
};

export default GalleryCard;
