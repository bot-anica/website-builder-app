interface BookmarkIconProps {
  className?: string;
}

const BookmarkIcon = ({ className }: BookmarkIconProps) => (
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
      d="M5 4.09C5 3.489 5.488 3 6.09 3h17.455c.603 0 1.091.488 1.091 1.09v21.82a1.09 1.09 0 0 1-1.805.823l-7.51-6.509-8.567 6.552A1.09 1.09 0 0 1 5 25.909zm2.182 1.092v18.52l7.519-5.75a1.09 1.09 0 0 1 1.377.042l6.377 5.526V5.182z"
      clipRule="evenodd"
    />
  </svg>
);
export default BookmarkIcon;
