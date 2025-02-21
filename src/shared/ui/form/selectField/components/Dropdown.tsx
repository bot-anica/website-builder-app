import styles from '../SelectField.styles';

interface DropdownProps<T> {
  options: Array<T>;
  optionKey?: string;
  onSelect: (option: T) => void;
  getValue: (optionKey: string | undefined, option: T) => string;
}

function Dropdown<T>({
  options,
  optionKey,
  onSelect,
  getValue,
}: DropdownProps<T>) {
  return (
    <div className={styles.dropdown}>
      <ul>
        {options.map((option, index) => (
          <li key={index} className={styles['dropdown-item']}>
            <button
              type="button"
              onClick={() => onSelect(option)}
              className={styles['dropdown-button']}
            >
              <div className={styles['dropdown-text']}>
                {getValue(optionKey, option)}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
