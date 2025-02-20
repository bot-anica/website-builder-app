interface Copy2IconProps {
  className?: string;
}

const Copy2Icon = ({ className }: Copy2IconProps) => (
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
      d="M16 5H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M6 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.556 10a1 1 0 0 1 1-1h1.777c.605 0 1.49.173 2.251.722.813.585 1.416 1.552 1.416 2.945v10.666c0 .605-.173 1.49-.722 2.251-.585.813-1.552 1.416-2.945 1.416H13.667a3.98 3.98 0 0 1-2.251-.722C10.603 25.693 10 24.726 10 23.333a1 1 0 1 1 2 0c0 .741.286 1.108.584 1.322.35.251.798.345 1.083.345h10.666c.741 0 1.108-.286 1.322-.584.251-.35.345-.798.345-1.083V12.667c0-.741-.286-1.107-.584-1.322A2 2 0 0 0 24.333 11h-1.777a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default Copy2Icon;
