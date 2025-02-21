import { twMerge } from 'tailwind-merge';

import { TextProps } from './types';

import styles from './Text.styles';

export default function Text({ text, className }: TextProps) {
  return <p className={twMerge(styles.text, className)}>{text}</p>;
}
