interface MinusIconProps {
  className?: string;
}

const MinusIcon = ({ className }: MinusIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 30 30"
    className={className}
  >
    <rect
      width={2}
      height={24}
      x={27}
      y={14}
      fill="currentColor"
      rx={1}
      transform="rotate(90 27 14)"
    />
  </svg>
);
export default MinusIcon;
