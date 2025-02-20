interface UndoIconProps {
  className?: string;
}

const UndoIcon = ({ className }: UndoIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 30 30"
    className={className}
  >
    <path
      fill="#686B6E"
      fillRule="evenodd"
      d="M7.5 5a1 1 0 0 1 1 1v1.4A9.96 9.96 0 0 1 15 5c5.523 0 10 4.477 10 10s-4.477 10-10 10S5 20.523 5 15a1 1 0 1 1 2 0 8 8 0 1 0 2.708-6H11.5a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default UndoIcon;
