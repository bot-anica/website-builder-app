interface ArrowUpIconProps {
  className?: string;
}

const ArrowUpIcon = ({ className }: ArrowUpIconProps) => (
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
      d="M24.703 13.327a1 1 0 0 0 .008-1.414l-9.5-9.616a1 1 0 0 0-1.422 0l-9.5 9.616a1 1 0 1 0 1.422 1.405L13.5 5.435V28a1 1 0 1 0 2 0V5.435l7.789 7.883a1 1 0 0 0 1.414.009"
      clipRule="evenodd"
    />
  </svg>
);
export default ArrowUpIcon;
