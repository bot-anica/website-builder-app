import { cardStyles } from '../NewsCard.styles';

interface CardMetaProps {
  date: string;
}

const CardMeta = ({ date }: CardMetaProps) => {
  return (
    <div className={cardStyles.metaContainer}>
      <span>{date}</span>
    </div>
  );
};

export default CardMeta;
