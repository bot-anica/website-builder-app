interface AdditionalIconProps {
  className?: string;
}

const AdditionalIcon = ({ className }: AdditionalIconProps) => (
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
      d="M15 25c5.523 0 10-4.477 10-10S20.523 5 15 5 5 9.477 5 15s4.477 10 10 10m0 2c6.627 0 12-5.373 12-12S21.627 3 15 3 3 8.373 3 15s5.373 12 12 12"
      clipRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      d="M19.8 13.8a1.2 1.2 0 1 1 0 2.4h-9.6a1.2 1.2 0 0 1 0-2.4z"
    ></path>
    <path
      fill="currentColor"
      d="M13.8 10.2a1.2 1.2 0 0 1 2.4 0v9.6a1.2 1.2 0 0 1-2.4 0z"
    ></path>
  </svg>
);

export default AdditionalIcon;
