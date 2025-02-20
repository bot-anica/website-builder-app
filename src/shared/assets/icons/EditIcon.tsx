interface EditIconProps {
  className?: string;
}

const EditIcon = ({ className }: EditIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 30 30"
    className={className}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.777 4.293a1 1 0 0 1 1.414 0l4.645 4.645a1 1 0 0 1 0 1.414L8.352 25.836a1 1 0 0 1-.707.293H3a1 1 0 0 1-1-1v-4.645a1 1 0 0 1 .293-.707zm.707 2.121L4 20.898v3.231h3.231L21.715 9.645zM27 26.13H15.387a1 1 0 1 1 0-2H27a1 1 0 1 1 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default EditIcon;
