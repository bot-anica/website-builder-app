interface Star2IconProps {
  className?: string;
}

const Star2Icon = ({ className }: Star2IconProps) => (
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
      d="M7.178 26.538c.564.404 1.307.46 1.925.145l6.213-3.167 5.83 3.088a1.857 1.857 0 0 0 2.704-1.923l-1.121-7.292 4.657-4.12a1.857 1.857 0 0 0-1.047-3.24l-6.845-.679-2.844-6.263a1.857 1.857 0 0 0-3.403.05l-2.405 5.734-7.265 1.283a1.857 1.857 0 0 0-.952 3.18l4.798 4.527-1.001 6.9c-.1.687.192 1.372.756 1.777M9.4 17.172l-5.5-5.19 8.263-1.458 2.796-6.669 3.286 7.238 7.91.785-5.416 4.791 1.276 8.294-6.683-3.54-7.072 3.605z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.789 3.106a2 2 0 0 0-3.627.106L10.617 9.15l-7.35.865a2 2 0 0 0-1.047 3.522l5.16 4.3-.864 6.916a2 2 0 0 0 2.932 2.009l5.586-3.008 6.072 3.036a2 2 0 0 0 2.86-2.158l-1.294-6.902 4.673-4.25a2 2 0 0 0-1.08-3.461l-6.45-.86z"
      clipRule="evenodd"
    />
  </svg>
);
export default Star2Icon;
