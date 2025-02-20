interface MinimizeIconProps {
  className?: string;
}

const MinimizeIcon = ({ className }: MinimizeIconProps) => (
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
      d="M26 10.333a1 1 0 1 1 0 2h-7.333a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v4.92l5.626-5.627a1 1 0 1 1 1.414 1.414l-5.626 5.626zM11.333 27a1 1 0 0 1-1-1v-4.92l-5.626 5.627a1 1 0 0 1-1.414-1.414l5.626-5.626H4a1 1 0 1 1 0-2h7.333a1 1 0 0 1 1 1V26a1 1 0 0 1-1 1"
      clipRule="evenodd"
    />
  </svg>
);
export default MinimizeIcon;
