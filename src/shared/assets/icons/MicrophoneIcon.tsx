interface MicrophoneIconProps {
  className?: string;
}

const MicrophoneIcon = ({ className }: MicrophoneIconProps) => (
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
      d="M22.568 11.378a1 1 0 0 1 1 1c0 2.272-1.126 4.46-2.726 6.059s-3.787 2.725-6.058 2.725a1 1 0 1 1 0-2c1.62 0 3.325-.82 4.644-2.14 1.32-1.318 2.14-3.023 2.14-4.644a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 11.378a1 1 0 0 0-1 1c0 2.272 1.126 4.46 2.725 6.059s3.788 2.725 6.059 2.725a1 1 0 1 0 0-2c-1.62 0-3.325-.82-4.645-2.14C8.82 15.705 8 14 8 12.379a1 1 0 0 0-1-1M7.297 26a1 1 0 0 1 1-1h11.676a1 1 0 1 1 0 2H8.297a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.973 12.378V7.19a3.19 3.19 0 0 0-6.378 0v5.19a3.19 3.19 0 1 0 6.378 0M14.783 2a5.19 5.19 0 0 0-5.188 5.19v5.188a5.19 5.19 0 0 0 10.378 0V7.19A5.19 5.19 0 0 0 14.783 2M14.784 20.46a1 1 0 0 1 1 1v3.891a1 1 0 0 1-2 0V21.46a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default MicrophoneIcon;
