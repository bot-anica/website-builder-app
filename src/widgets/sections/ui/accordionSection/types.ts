import React from 'react';

export type Position = 'center' | 'left';
export type VerticalPosition = 'top' | 'middle';
export type Size = 'default' | 'large';
export type Width = 'full' | 'limited';
export type TitleSize = 'small' | 'medium' | 'large';
export type Variant = 'white' | 'blue';
export type MaxWidth = 'full' | 'medium' | 'small' | 'extraSmall';

export interface AccordionItem {
  title: string;
  content: string | React.ReactNode;
}

export interface SectionProps {
  title?: string;
  titleXPosition?: Position;
  titleYPosition?: VerticalPosition;
  description?: string;
  descriptionSize?: Size;
  descriptionWidth?: Width;
  textPartPosition?: Position;
  text?: string;
  accordionTitleSize?: TitleSize;
  items: AccordionItem[];
  variant?: Variant;
  maxWidth?: MaxWidth;
}
