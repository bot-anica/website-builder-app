interface Calendar1IconProps {
  className?: string;
}

const Calendar1Icon = ({ className }: Calendar1IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 30 30"
    className={className}
  >
    <rect width={2} height={6} x={8} y={4} fill="currentColor" rx={1} />
    <rect width={2} height={6} x={20} y={4} fill="currentColor" rx={1} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M24 8H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M6 6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M27 14H4v-2h23z"
      clipRule="evenodd"
    />
  </svg>
);
export default Calendar1Icon;
