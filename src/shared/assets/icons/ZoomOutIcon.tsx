interface ZoomOutIconProps {
  className?: string;
}

const ZoomOutIcon = ({ className }: ZoomOutIconProps) => (
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
      d="M12.618 20.235a7.618 7.618 0 1 0 0-15.235 7.618 7.618 0 0 0 0 15.235m0 2a9.618 9.618 0 1 0 0-19.235 9.618 9.618 0 0 0 0 19.235"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M18.475 18.534a1.043 1.043 0 0 1 1.475 0l6.312 6.312a1.043 1.043 0 1 1-1.476 1.476l-6.311-6.312a1.043 1.043 0 0 1 0-1.476"
    />
    <rect width={9} height={2} x={8} y={11.5} fill="currentColor" rx={1} />
  </svg>
);
export default ZoomOutIcon;
