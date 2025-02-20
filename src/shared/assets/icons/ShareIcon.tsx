interface ShareIconProps {
  className?: string;
}

const ShareIcon = ({ className }: ShareIconProps) => (
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
      d="M17.476 10.632a5.333 5.333 0 1 0-.923-1.781l-3.702 2.313a5.333 5.333 0 1 0-.374 6.194l4.092 3.069a5.333 5.333 0 1 0 .954-1.785l-4.092-3.069a5.3 5.3 0 0 0 .154-2.51zm.857-3.299a3.333 3.333 0 1 0 6.667 0 3.333 3.333 0 0 0-6.667 0m-6.994 5.224a1 1 0 0 0-.006.11v2.788a3.334 3.334 0 1 1 .006-2.898m10.328 12.776a3.333 3.333 0 1 1 0-6.667 3.333 3.333 0 0 1 0 6.667"
      clipRule="evenodd"
    />
  </svg>
);
export default ShareIcon;
