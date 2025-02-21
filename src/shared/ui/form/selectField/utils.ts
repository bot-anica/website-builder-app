export function getValue<T>(optionKey: string | undefined, option: T) {
  return optionKey &&
    typeof option === 'object' &&
    option !== null &&
    optionKey in option
    ? String((option as Record<string, unknown>)[optionKey])
    : String(option);
}
