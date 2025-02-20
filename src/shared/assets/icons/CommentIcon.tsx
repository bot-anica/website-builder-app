interface CommentIconProps {
  className?: string;
}

const CommentIcon = ({ className }: CommentIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 30 30"
    className={className}
  >
    <path
      fill="#686B6E"
      fillRule="evenodd"
      d="M15 7a8 8 0 0 0-8 8v8h8a8 8 0 1 0 0-16M5 15C5 9.477 9.477 5 15 5s10 4.477 10 10-4.477 10-10 10H5z"
      clipRule="evenodd"
    />
  </svg>
);
export default CommentIcon;
