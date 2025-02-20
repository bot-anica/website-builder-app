interface HintIconProps {
  className?: string;
}

const HintIcon = ({ className }: HintIconProps) => (
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
      d="M3 15C3 8.373 8.373 3 15 3s12 5.373 12 12-5.373 12-12 12S3 21.627 3 15m12-6a1.2 1.2 0 0 0 0 2.4h.012a1.2 1.2 0 0 0 0-2.4zm1.2 6a1.2 1.2 0 0 0-2.4 0v4.8a1.2 1.2 0 0 0 2.4 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default HintIcon;
