import { cardStyles } from './NewsCard.styles';
import { NewsCardProps } from './types';
import CardImage from './components/CardImage';
import CardContent from './components/CardContent';

const NewsCard = ({
  image,
  imageSize = 'medium',
  title,
  titleSize = 'medium',
  date,
  preview,
  onClick,
  withBorder = false,
  hoverEffectVariant = 'default',
  showReadMoreButton,
}: NewsCardProps) => {
  return (
    <div
      className={`
        ${cardStyles.wrapper}
        ${withBorder ? cardStyles.withBorder : ''}
      `}
      onClick={onClick}
    >
      <CardImage
        image={image}
        imageSize={imageSize}
        title={title}
        hoverEffectVariant={hoverEffectVariant}
      />
      <CardContent
        title={title}
        titleSize={titleSize}
        date={date}
        preview={preview}
        showReadMoreButton={showReadMoreButton}
      />
    </div>
  );
};

export default NewsCard;
