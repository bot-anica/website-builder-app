interface ArrowLeftIconProps {
  className?: string;
}

const ArrowLeftIcon = ({ className }: ArrowLeftIconProps) => (
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
      d="M12.327 5.297a1 1 0 0 0-1.414-.008l-9.616 9.5a1 1 0 0 0 0 1.422l9.616 9.5a1 1 0 1 0 1.405-1.422L4.435 16.5H27a1 1 0 1 0 0-2H4.435l7.883-7.789a1 1 0 0 0 .009-1.414"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default ArrowLeftIcon;
