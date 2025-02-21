import { ChangeEvent } from 'react';

export type InputType = 'text' | 'email' | 'tel';
export type StatusType = 'default' | 'warning' | 'error' | 'success';

export interface DefaultProps {
  name: string;
  label: string;
  type?: InputType;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface AdditionalProps {
  showSubmitButton?: boolean;
  handleSubmit?: () => void;
}

export interface StatusProps {
  hint?: string;
  status?: StatusType;
}

export interface InputFieldProps
  extends DefaultProps,
    AdditionalProps,
    StatusProps {}
