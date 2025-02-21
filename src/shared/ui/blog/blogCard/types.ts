export interface BlogCardProps {
  image: string;
  title: string;
  author: string;
  date: string;
  preview: string;
  onClick?: () => void;
  withBorder?: boolean;
  hoverEffectVariant?: 'default' | 'withIcon' | 'withoutIcon';
}
