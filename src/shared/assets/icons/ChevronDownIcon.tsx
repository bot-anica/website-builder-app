interface ChevronDownIconProps {
  className?: string;
}

const ChevronDownIcon = ({ className }: ChevronDownIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 30 30"
    className={className}
  >
    <rect
      width={15.43}
      height={2}
      x={5.414}
      y={9}
      fill="currentColor"
      rx={1}
      transform="rotate(45 5.414 9)"
    />
    <rect
      width={15.427}
      height={2}
      fill="currentColor"
      rx={1}
      transform="scale(-1 1)rotate(45 -23.075 -24.981)"
    />
  </svg>
);
export default ChevronDownIcon;
