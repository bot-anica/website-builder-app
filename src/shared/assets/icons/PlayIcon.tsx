interface PlayIconProps {
  className?: string;
}

const PlayIcon = ({ className }: PlayIconProps) => (
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
      d="M7 4a1 1 0 0 1 1.591-.806l15 11a1 1 0 0 1 0 1.612l-15 11A1 1 0 0 1 7 26z"
      clipRule="evenodd"
    />
  </svg>
);
export default PlayIcon;
