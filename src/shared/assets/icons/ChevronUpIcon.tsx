interface ChevronUpIconProps {
  className?: string;
}

const ChevronUpIcon = ({ className }: ChevronUpIconProps) => (
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
      d="M24.96 20.707a1 1 0 0 1-1.415 0l-9.496-9.496a1 1 0 0 1 1.414-1.415l9.497 9.497a1 1 0 0 1 0 1.414"
    />
    <path
      fill="currentColor"
      d="M4.537 20.707a1 1 0 0 0 1.414 0l9.494-9.494a1 1 0 1 0-1.414-1.415l-9.494 9.495a1 1 0 0 0 0 1.414"
    />
  </svg>
);
export default ChevronUpIcon;
