interface DownloadIconProps {
  className?: string;
}

const DownloadIcon = ({ className }: DownloadIconProps) => (
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
      d="M2.077 18c.595 0 1.077.448 1.077 1v7h23.692v-7c0-.552.482-1 1.077-1S29 18.448 29 19v9H1v-9c0-.552.482-1 1.077-1"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15 1c.644 0 1.167.497 1.167 1.111v15.095l3.841-3.658a1.21 1.21 0 0 1 1.65 0 1.074 1.074 0 0 1 0 1.571l-5.833 5.556a1.21 1.21 0 0 1-1.65 0l-5.833-5.556a1.074 1.074 0 0 1 0-1.571 1.21 1.21 0 0 1 1.65 0l3.841 3.658V2.111C13.833 1.497 14.356 1 15 1"
      clipRule="evenodd"
    />
  </svg>
);
export default DownloadIcon;
