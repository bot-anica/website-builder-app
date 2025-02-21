import { cardStyles } from '../GalleryCard.styles';

interface CardContentProps {
  title: string;
  description?: string;
  date?: string;
}

const CardContent = ({ title, description, date }: CardContentProps) => {
  return (
    <div className={cardStyles.contentWrapper}>
      {date && <span className={cardStyles.date}>{date}</span>}
      <h3 className={cardStyles.title}>{title}</h3>
      {description && <p className={cardStyles.description}>{description}</p>}
    </div>
  );
};

export default CardContent;
