import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

import styles from './Accordion.styles';

import AccordionIcon from '../accordionIcon/AccordionIcon';

interface AccordionProps {
  title: string;
  content: string | React.ReactNode;
  titleSize?: 'small' | 'medium' | 'large';
  titleWeight?: 'default' | 'bold';
  iconVariant?: 'plus' | 'arrow';
  iconColor?: 'blue' | 'black';
  iconSize?: 'small' | 'medium' | 'large';
  maxWidth?: 'full' | 'medium' | 'small' | 'extraSmall';
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  titleSize = 'medium',
  titleWeight = 'default',
  content,
  iconVariant = 'plus',
  iconColor = 'blue',
  iconSize = 'medium',
  maxWidth = 'full',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const accordionWrapperStyles = twMerge(
    styles.fieldHeights[titleSize],
    styles.accordionButton,
  );

  const accordionTitleStyles = twMerge(
    styles.titleWeights[titleWeight],
    styles.titleSizes[titleSize],
    styles.titleColor,
  );

  return (
    <div
      className={twMerge(styles.maxWidths[maxWidth], styles.accordionWrapper)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={accordionWrapperStyles}
      >
        <span className={accordionTitleStyles}>{title}</span>
        <AccordionIcon
          isOpen={isOpen}
          variant={iconVariant}
          color={iconColor}
          size={iconSize}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.accordionContentWrapper}>
              {typeof content === 'string' ? (
                <p className={styles.accordionContent}>{content}</p>
              ) : (
                content
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
