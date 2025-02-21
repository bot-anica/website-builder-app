import { ChangeEvent } from 'react';

export type StatusType = 'default' | 'warning' | 'error' | 'success';

export interface TextareaFieldProps {
  // Default props
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;

  // Additional props
  showSubmitButton?: boolean;
  handleSubmit?: () => void;

  // Status props
  hint?: string;
  status?: StatusType;
}
