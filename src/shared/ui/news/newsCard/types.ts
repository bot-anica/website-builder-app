export type Size = 'small' | 'medium' | 'large' | 'extraLarge';

export type HoverEffectVariant = 'default' | 'withIcon' | 'withoutIcon';

export interface NewsCardProps {
  image: string;
  imageSize: Size;
  title: string;
  titleSize: Size;
  date: string;
  preview?: string;
  onClick?: () => void;
  withBorder?: boolean;
  hoverEffectVariant?: HoverEffectVariant;
  size?: Size;
  showReadMoreButton?: boolean;
}
