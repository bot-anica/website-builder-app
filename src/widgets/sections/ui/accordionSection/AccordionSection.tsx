import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TextContent } from './components/TextContent';
import { AccordionContent } from './components/AccordionContent';
import { Container } from '../../../../shared/ui/container/Container';

import { SectionProps } from './types';
import { getStyleConfig } from './styleConfig';

import styles from './AccordionSection.styles';

export const AccordionSection: React.FC<SectionProps> = ({
  title,
  titleXPosition = 'center',
  titleYPosition = 'top',
  description,
  descriptionSize = 'default',
  descriptionWidth = 'full',
  textPartPosition = 'center',
  text,
  accordionTitleSize,
  items,
  variant = 'white',
  maxWidth = 'medium',
}) => {
  const { titleStyles, descriptionStyles, layoutStyles } = getStyleConfig({
    description,
    textPartPosition,
    titleXPosition,
    titleYPosition,
    descriptionSize,
    descriptionWidth,
    variant,
    maxWidth,
  });

  return (
    <section className={layoutStyles.section}>
      <Container>
        <div
          className={twMerge(
            layoutStyles.content,
            layoutStyles.verticalAlignment,
          )}
        >
          <div className={styles.textPartWidth[maxWidth]}>
            <TextContent
              title={title}
              description={description}
              titleStyles={titleStyles}
              descriptionStyles={descriptionStyles}
            />
          </div>
          <div className={styles.accordionPartWidth[maxWidth]}>
            <AccordionContent
              text={text}
              items={items}
              accordionTitleSize={accordionTitleSize}
              variant={variant}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
