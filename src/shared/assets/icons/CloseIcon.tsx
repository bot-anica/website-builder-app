interface CloseIconProps {
  className?: string;
}

const CloseIcon = ({ className }: CloseIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 30 30"
    className={className}
  >
    <g clipPath="url(#close_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M23.485 6.515a1 1 0 0 0-1.414 0L15 13.585l-7.071-7.07a1 1 0 0 0-1.414 1.414L13.585 15l-7.07 7.071a1 1 0 1 0 1.414 1.414L15 16.415l7.071 7.07a1 1 0 0 0 1.414-1.414l-7.07-7.07 7.07-7.072a1 1 0 0 0 0-1.414"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="close_svg__a">
        <path fill="#fff" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CloseIcon;
