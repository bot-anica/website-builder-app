import React from 'react';

import Text from '../../../../../shared/ui/text/Text';
import AccordionGroup from '../../../../../shared/ui/accordion/accordionGroup/AccordionGroup';
import Accordion from '../../../../../shared/ui/accordion/accordion/Accordion';

import { AccordionItem, TitleSize, Variant } from '../types';

import styles from '../AccordionSection.styles';

interface AccordionContentProps {
  text?: string;
  items: AccordionItem[];
  accordionTitleSize?: TitleSize;
  variant?: Variant;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  text,
  items,
  accordionTitleSize,
  variant = 'white',
}) => {
  if (items.length === 0) return null;

  return (
    <>
      {text && <Text text={text} className={styles.accordionPartText} />}
      <AccordionGroup withBackground={variant === 'blue'}>
        {items.map((item, index) => (
          <Accordion
            key={`${item.title}-${index}`}
            title={item.title}
            titleSize={accordionTitleSize}
            content={item.content}
            iconColor={variant === 'blue' ? 'blue' : 'black'}
          />
        ))}
      </AccordionGroup>
    </>
  );
};
