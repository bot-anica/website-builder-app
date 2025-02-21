export type SelectType = 'rounded' | 'square';

export interface StyleConfigProps {
  type: SelectType;
  value: unknown;
  hasError?: boolean;
  disabled?: boolean;
}

export interface DefaultProps<T> {
  type?: SelectType;
  name: string;
  value: T | undefined;
  onSelect: (value: unknown) => void;
  options: Array<T>;
  optionKey?: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface StatusProps {
  hasError?: boolean;
}

export interface LittleSelectFieldProps<T>
  extends DefaultProps<T>,
    StatusProps {}
