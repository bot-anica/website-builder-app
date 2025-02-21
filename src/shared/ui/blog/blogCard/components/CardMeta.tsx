import { cardStyles } from '../BlogCard.styles';

interface CardMetaProps {
  author: string;
  date: string;
}

const CardMeta = ({ author, date }: CardMetaProps) => {
  return (
    <div className={cardStyles.metaContainer}>
      <span>{author}</span>
      <span>•</span>
      <span>{date}</span>
    </div>
  );
};

export default CardMeta;
