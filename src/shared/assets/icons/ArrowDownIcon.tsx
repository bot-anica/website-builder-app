interface ArrowDownIconProps {
  className?: string;
}

const ArrowDownIcon = ({ className }: ArrowDownIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="currentColor"
    viewBox="0 0 30 30"
    className={className}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.297 16.673a1 1 0 0 0-.008 1.414l9.5 9.616a1 1 0 0 0 1.422 0l9.5-9.616a1 1 0 1 0-1.422-1.405L15.5 24.565V2a1 1 0 1 0-2 0v22.565l-7.789-7.883a1 1 0 0 0-1.414-.009"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default ArrowDownIcon;
