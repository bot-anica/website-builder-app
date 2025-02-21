interface StyleConfigProps {
  type: 'square' | 'rounded';
  value: unknown;
  hasError?: boolean;
  disabled?: boolean;
}

export function getStyleConfig({
  type,
  value,
  hasError,
  disabled,
}: StyleConfigProps) {
  return {
    fieldStyles: `flex flex-col gap-4 ${disabled ? 'opacity-40' : ''}`,
    inputWrapperStyles: `relative flex items-center gap-1 h-10 border ${type === 'rounded' ? 'rounded-full' : ''} ${
      hasError
        ? 'border text-accent-red border-accent-red bg-accent-red bg-opacity-20 transition hover:border-opacity-50 hover:bg-opacity-10 focus-within:shadow-error'
        : value
          ? 'border text-white border-blue-moon bg-blue-moon bg-opacity-20 transition hover:border-opacity-50 hover:bg-opacity-10 focus-within:border-blue-moon'
          : 'border text-white border-light-grey bg-light-grey bg-opacity-20 transition hover:border-opacity-50 hover:bg-opacity-10 focus-within:border-blue-moon'
    }`,
  };
}
