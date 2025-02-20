interface GraphIconProps {
  className?: string;
}

const GraphIcon = ({ className }: GraphIconProps) => (
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
      d="M24.067 8.176a1 1 0 0 1 .257 1.39l-5.5 8a1 1 0 0 1-1.438.223l-3.619-2.815-3.415 5.55a1 1 0 0 1-1.704-1.048l4-6.5a1 1 0 0 1 1.466-.265l3.663 2.849 4.9-7.126a1 1 0 0 1 1.39-.258"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 6a1 1 0 0 1 1 1v15.5h16.5a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default GraphIcon;
