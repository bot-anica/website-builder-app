interface PlusIconProps {
  className?: string;
}

const PlusIcon = ({ className }: PlusIconProps) => (
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
      d="M15 3a1 1 0 0 0-1 1v10H4a1 1 0 1 0 0 2h10v10a1 1 0 1 0 2 0V16h10a1 1 0 1 0 0-2H16V4a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default PlusIcon;
