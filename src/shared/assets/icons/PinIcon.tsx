interface PinIconProps {
  className?: string;
}

const PinIcon = ({ className }: PinIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 30 30"
    className={className}
  >
    <rect
      width={2.286}
      height={5.714}
      x={13.999}
      y={22.286}
      fill="currentColor"
      rx={1.143}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M23.5 18.5c1 1 .5 2.5-1.5 2.5H9c-2 0-2.5-1.5-1.5-2.5l2-2V8c0-2.4 2-3 3-3H18c2.8 0 3.167 2 3 3v8.5zm-.5-2.961 1.836 1.469.078.078c.97.969 1.466 2.5.75 3.933C24.958 22.431 23.456 23 22 23H9c-1.456 0-2.958-.57-3.664-1.98-.716-1.433-.22-2.965.75-3.934L7.5 15.672V8c0-1.852.816-3.202 1.956-4.023C10.494 3.23 11.68 3 12.5 3H18c1.928 0 3.408.726 4.272 2.008.724 1.075.831 2.277.728 3.13z"
      clipRule="evenodd"
    />
  </svg>
);
export default PinIcon;
