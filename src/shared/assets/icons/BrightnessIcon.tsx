interface BrightnessIconProps {
  className?: string;
}

const BrightnessIcon = ({ className }: BrightnessIconProps) => (
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
      d="M15 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
      clipRule="evenodd"
    />
    <rect width={2} height={6} x={14} y={1} fill="currentColor" rx={1} />
    <rect width={2} height={6} x={14} y={23} fill="currentColor" rx={1} />
    <rect
      width={2}
      height={6}
      x={29}
      y={14}
      fill="currentColor"
      rx={1}
      transform="rotate(90 29 14)"
    />
    <rect
      width={2}
      height={6}
      x={7}
      y={14}
      fill="currentColor"
      rx={1}
      transform="rotate(90 7 14)"
    />
    <rect
      width={2}
      height={5}
      x={24.9}
      y={23.485}
      fill="currentColor"
      rx={1}
      transform="rotate(135 24.9 23.485)"
    />
    <rect
      width={2}
      height={5}
      x={10.05}
      y={8.636}
      fill="currentColor"
      rx={1}
      transform="rotate(135 10.05 8.636)"
    />
    <rect
      width={2}
      height={5}
      x={6.515}
      y={24.9}
      fill="currentColor"
      rx={1}
      transform="rotate(-135 6.515 24.9)"
    />
    <rect
      width={2}
      height={5}
      x={21.364}
      y={10.05}
      fill="currentColor"
      rx={1}
      transform="rotate(-135 21.364 10.05)"
    />
  </svg>
);
export default BrightnessIcon;
