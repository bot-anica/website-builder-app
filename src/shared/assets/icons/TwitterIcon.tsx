interface TwitterIconProps {
  className?: string;
}

const TwitterIcon = ({ className }: TwitterIconProps) => (
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
      d="M5.99 22V9.57H1.2V7.6h11.67v1.97H8.08V22zM15.58 22l-3.3-10.81 2.07.01 2.26 7.41 2.28-7.41h1.8l2.28 7.41 2.26-7.41h2.06L23.99 22h-1.68l-2.52-7.82L17.26 22z"
    />
  </svg>
);
export default TwitterIcon;
