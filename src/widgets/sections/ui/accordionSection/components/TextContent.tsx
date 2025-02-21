import React from 'react';
import { twMerge } from 'tailwind-merge';

import Text from '../../../../../shared/ui/text/Text';
import Title from '../../../../../shared/ui/title/Title';

import styles from '../AccordionSection.styles';

interface TextContentProps {
  title?: string;
  description?: string;
  titleStyles: {
    padding: string;
    position: string;
  };
  descriptionStyles: {
    size: string;
    width: string;
  };
}

export const TextContent: React.FC<TextContentProps> = ({
  title,
  description,
  titleStyles,
  descriptionStyles,
}) => {
  if (!title && !description) return null;

  return (
    <div className={styles.textPart}>
      {title && (
        <Title
          text={title}
          className={twMerge(titleStyles.padding, titleStyles.position)}
        />
      )}
      {description && (
        <Text
          text={description}
          className={twMerge(descriptionStyles.size, descriptionStyles.width)}
        />
      )}
    </div>
  );
};
