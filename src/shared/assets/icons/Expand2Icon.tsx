interface Expand2IconProps {
  className?: string;
}

const Expand2Icon = ({ className }: Expand2IconProps) => (
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
      d="M17.26 9.26a1.043 1.043 0 1 1 0-2.086h4.523c.576 0 1.043.467 1.043 1.043v4.522a1.044 1.044 0 0 1-2.087 0v-2.002L18 13.477a1.043 1.043 0 0 1-1.476-1.476l2.74-2.74zm-5.259 7.263a1.043 1.043 0 0 1 1.476 1.476l-2.74 2.74h2.002a1.044 1.044 0 0 1 0 2.087H8.217a1.044 1.044 0 0 1-1.043-1.043V17.26a1.043 1.043 0 1 1 2.087 0v2.002z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M23 5H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M7 3a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4z"
      clipRule="evenodd"
    />
  </svg>
);
export default Expand2Icon;
