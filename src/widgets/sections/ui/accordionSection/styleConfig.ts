import { twMerge } from 'tailwind-merge';

import { SectionProps } from './types';

import styles from './AccordionSection.styles';

type StyleConfigProps = Pick<
  SectionProps,
  | 'description'
  | 'textPartPosition'
  | 'titleXPosition'
  | 'titleYPosition'
  | 'descriptionSize'
  | 'descriptionWidth'
  | 'variant'
  | 'maxWidth'
>;

export const getStyleConfig = ({
  description,
  textPartPosition,
  titleXPosition,
  titleYPosition,
  descriptionSize,
  descriptionWidth,
  variant,
}: StyleConfigProps) => {
  const titleStyles = {
    padding: description
      ? styles.titlePaddingWithDescription
      : styles.titlePaddingWithoutDescription,
    position:
      textPartPosition !== 'left' && titleXPosition === 'center'
        ? styles.textCenterXPosition
        : styles.textLeftXPosition,
  };

  const descriptionStyles = {
    size: styles.textSize[descriptionSize || 'default'],
    width: descriptionWidth === 'full' ? '' : styles.textDescriptionLimited,
  };

  const layoutStyles = {
    content:
      textPartPosition === 'center'
        ? styles.contentPositionCenter
        : twMerge(
            styles.contentPositionLeft,
            textPartPosition === 'left' ? styles.textPartPositionLeft : '',
          ),
    verticalAlignment:
      titleYPosition === 'middle'
        ? styles.textPartVerticalAlignmentMiddle
        : styles.textPartVerticalAlignmentTop,
    section: twMerge(styles.section.base, styles.section[variant || 'white']),
  };

  return { titleStyles, descriptionStyles, layoutStyles };
};
