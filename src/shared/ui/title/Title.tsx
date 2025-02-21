import { twMerge } from 'tailwind-merge';

import { TitleProps } from './types';

import styles from './Title.styles';

export default function Title({ text, className }: TitleProps) {
  return <h2 className={twMerge(styles.title, className)}>{text}</h2>;
}
