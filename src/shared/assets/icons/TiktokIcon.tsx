interface TiktokIconProps {
  className?: string;
}

const TiktokIcon = ({ className }: TiktokIconProps) => (
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
      d="M15.567 8.06v1.48h-3.8V22h-1.82V9.54h-3.82V8.06zM20.028 12.54V19q0 .8.34 1.14.34.32 1.18.32h1.34V22h-1.64q-1.521 0-2.28-.7-.76-.7-.76-2.3v-6.46h-1.42v-1.5h1.42V8.28h1.82v2.76h2.86v1.5z"
    />
  </svg>
);
export default TiktokIcon;
