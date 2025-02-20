interface ChevronLeftIconProps {
  className?: string;
}

const ChevronLeftIcon = ({ className }: ChevronLeftIconProps) => (
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
      d="M20.374 4.293a1 1 0 0 1 0 1.414l-9.496 9.497a1 1 0 1 1-1.415-1.415l9.497-9.496a1 1 0 0 1 1.414 0"
    />
    <path
      fill="currentColor"
      d="M20.374 24.716a1 1 0 0 0 0-1.414l-9.494-9.495a1 1 0 0 0-1.415 1.414l9.495 9.495a1 1 0 0 0 1.414 0"
    />
  </svg>
);
export default ChevronLeftIcon;
