export type HoverEffectVariant = 'default' | 'withIcon' | 'withoutIcon';

export interface GalleryCardProps {
  image: string;
  title: string;
  description?: string;
  date?: string;
  onClick?: () => void;
  withBorder?: boolean;
  hoverEffectVariant?: HoverEffectVariant;
}
