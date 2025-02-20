interface ChevronRightIconProps {
  className?: string;
}

const ChevronRightIcon = ({ className }: ChevronRightIconProps) => (
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
      x={8.756}
      y={24.667}
      fill="currentColor"
      rx={1}
      transform="rotate(-45 8.756 24.667)"
    />
    <rect
      width={15.427}
      height={2}
      fill="currentColor"
      rx={1}
      transform="scale(1 -1)rotate(-45 -2.452 -13.399)"
    />
  </svg>
);
export default ChevronRightIcon;
