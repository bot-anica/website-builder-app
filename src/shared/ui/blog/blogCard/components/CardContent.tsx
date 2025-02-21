import { cardStyles } from '../BlogCard.styles';
import CardMeta from './CardMeta';

interface CardContentProps {
  title: string;
  preview: string;
  author: string;
  date: string;
}

const CardContent = ({ title, preview, author, date }: CardContentProps) => {
  return (
    <div className={cardStyles.contentWrapper}>
      <div className={cardStyles.contentContainer}>
        <CardMeta author={author} date={date} />
        <h3 className={cardStyles.title}>{title}</h3>
        <p className={cardStyles.preview}>{preview}</p>
      </div>
    </div>
  );
};

export default CardContent;
