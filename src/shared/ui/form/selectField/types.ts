export type StatusType = 'default' | 'error' | 'success';

export interface SelectFieldProps<T> {
  // Default props
  name: string;
  label: string;
  value: T | undefined;
  onSelect: (value: unknown) => void;
  options: Array<T>;
  optionKey?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;

  // Status props
  hint?: string;
  status?: StatusType;
}
