interface TickIconProps {
  className?: string;
}

const TickIcon = ({ className }: TickIconProps) => (
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
      d="M26.702 4.313a1.044 1.044 0 0 1-.015 1.476l-13.52 13.237-5.68-5.562a1.043 1.043 0 1 1 1.46-1.492l4.22 4.133 12.06-11.807a1.043 1.043 0 0 1 1.475.015"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.046 5.567a2.87 2.87 0 0 1 1.63-.524h13.498a1.043 1.043 0 1 1 0 2.087H5.677a.8.8 0 0 0-.411.13.4.4 0 0 0-.117.132.7.7 0 0 0-.062.328v15.516c0 .105.04.287.13.411q.055.077.132.117c.051.026.15.062.328.062h15.516c.105 0 .286-.04.41-.13a.4.4 0 0 0 .117-.132.7.7 0 0 0 .063-.328v-9.845a1.044 1.044 0 0 1 2.087 0v9.845c0 .994-.438 1.715-1.047 2.154-.555.4-1.191.523-1.63.523H5.677c-.994 0-1.715-.437-2.154-1.046A2.87 2.87 0 0 1 3 23.237V7.72c0-.993.437-1.715 1.046-2.153"
      clipRule="evenodd"
    />
  </svg>
);
export default TickIcon;
