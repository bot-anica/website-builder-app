import { Size } from '../types';

import { cardStyles, titleSizes } from '../NewsCard.styles';

import CardMeta from './CardMeta';

interface CardContentProps {
  title: string;
  date: string;
  preview?: string;
  titleSize: Size;
  showReadMoreButton?: boolean;
}

const CardContent = ({
  title,
  date,
  preview,
  titleSize,
  showReadMoreButton,
}: CardContentProps) => {
  return (
    <div className={cardStyles.contentWrapper}>
      <div className={cardStyles.contentContainer}>
        <CardMeta date={date} />
        <h3 className={`${titleSizes[titleSize]} ${cardStyles.title}`}>
          {title}
        </h3>
        {preview && <p className={cardStyles.preview}>{preview}</p>}
        {showReadMoreButton && (
          <button className={cardStyles.readMoreButton}>Read more</button>
        )}
      </div>
    </div>
  );
};

export default CardContent;
