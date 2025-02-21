import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import styles from './AccordionIcon.styles';

import ChevronDownIcon from '../../../assets/icons/ChevronDownIcon';
import MinusIcon from '../../../assets/icons/MinusIcon';
import PlusIcon from '../../../assets/icons/PlusIcon';

const AccordionIcon: FC<{
  isOpen: boolean;
  variant: 'plus' | 'arrow';
  color: 'blue' | 'black';
  size: 'small' | 'medium' | 'large';
}> = ({ isOpen, variant, color, size }) => {
  const iconClass = twMerge(styles.iconColors[color], styles.iconSizes[size]);
  const iconStateClass = isOpen ? styles.iconRotated : styles.iconDefault;

  if (variant === 'plus') {
    return isOpen ? (
      <MinusIcon className={iconClass} />
    ) : (
      <PlusIcon className={iconClass} />
    );
  }

  return (
    <ChevronDownIcon
      className={twMerge(iconClass, iconStateClass, styles.icon)}
    />
  );
};

export default AccordionIcon;
