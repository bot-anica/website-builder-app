import CardImage from './components/CardImage';
import CardContent from './components/CardContent';

import { BlogCardProps } from './types';

import { cardStyles } from './BlogCard.styles';

const BlogCard = ({
  image,
  title,
  author,
  date,
  preview,
  onClick,
  withBorder = false,
  hoverEffectVariant = 'default',
}: BlogCardProps) => {
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
      <CardContent
        title={title}
        preview={preview}
        author={author}
        date={date}
      />
    </div>
  );
};

export default BlogCard;
