interface InstagramIconProps {
  className?: string;
}

const InstagramIcon = ({ className }: InstagramIconProps) => (
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
      d="M7.6 22V7.6h2.09V22zM20.273 22v-5.31q0-.63-.11-1.29-.1-.67-.4-1.24a2.35 2.35 0 0 0-.83-.92q-.53-.35-1.39-.35-.56 0-1.06.19-.5.18-.88.59-.37.41-.59 1.08-.21.67-.21 1.63l-1.3-.49q0-1.47.55-2.59a4.13 4.13 0 0 1 1.58-1.76q1.03-.63 2.49-.63 1.12 0 1.88.36t1.23.95q.48.58.73 1.27t.34 1.35.09 1.16v6zm-7.59 0V11.2h1.87v3.12h.25V22z"
    />
  </svg>
);
export default InstagramIcon;
