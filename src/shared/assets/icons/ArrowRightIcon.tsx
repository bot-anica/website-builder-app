interface ArrowRightIconProps {
  className?: string;
}

const ArrowRightIcon = ({ className }: ArrowRightIconProps) => (
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
      d="M16.673 4.297a1 1 0 0 1 1.414-.008l9.616 9.5a1 1 0 0 1 0 1.422l-9.616 9.5a1 1 0 1 1-1.405-1.422l7.883-7.789H2a1 1 0 1 1 0-2h22.565l-7.883-7.789a1 1 0 0 1-.009-1.414"
      clipRule="evenodd"
    />
  </svg>
);
export default ArrowRightIcon;
