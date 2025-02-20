interface ExpandIconProps {
  className?: string;
}

const ExpandIcon = ({ className }: ExpandIconProps) => (
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
      d="M18.667 5a1 1 0 1 1 0-2H26a1 1 0 0 1 1 1v7.333a1 1 0 1 1-2 0V6.414l-5.626 5.626a1 1 0 1 1-1.414-1.414L23.586 5zM4 17.667a1 1 0 0 1 1 1v4.919l5.626-5.626a1 1 0 1 1 1.414 1.414L6.414 25h4.92a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1v-7.333a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default ExpandIcon;
