interface TvIconProps {
  className?: string;
}

const TvIcon = ({ className }: TvIconProps) => (
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
      d="M7.8 7.2h14.4A4.8 4.8 0 0 1 27 12v10.8a4.8 4.8 0 0 1-4.8 4.8H7.8A4.8 4.8 0 0 1 3 22.8V12a4.8 4.8 0 0 1 4.8-4.8m0 2.4A2.4 2.4 0 0 0 5.4 12v10.8a2.4 2.4 0 0 0 2.4 2.4h14.4a2.4 2.4 0 0 0 2.4-2.4V12a2.4 2.4 0 0 0-2.4-2.4z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.498 13.424a1.2 1.2 0 0 1 .278 1.674l-3 4.2a1.2 1.2 0 0 1-1.593.331l-2.197-1.318-2.937 2.938a1.2 1.2 0 1 1-1.698-1.697l3.6-3.6a1.2 1.2 0 0 1 1.466-.18l2.05 1.23 2.357-3.3a1.2 1.2 0 0 1 1.673-.278M10.552 3.351a1.2 1.2 0 0 1 1.697 0L15.6 6.703l3.351-3.352a1.2 1.2 0 1 1 1.697 1.698l-4.2 4.2a1.2 1.2 0 0 1-1.697 0l-4.2-4.2a1.2 1.2 0 0 1 0-1.698"
      clipRule="evenodd"
    />
  </svg>
);
export default TvIcon;
