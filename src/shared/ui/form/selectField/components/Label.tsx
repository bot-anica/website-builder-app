import styles from '../SelectField.styles';

interface LabelProps {
  name: string;
  label: string;
  required?: boolean;
}

function Label({ name, label, required }: LabelProps) {
  return (
    <label htmlFor={name} className={styles.label}>
      {label}
      {required && <span className={styles.required}> *</span>}
    </label>
  );
}

export default Label;
