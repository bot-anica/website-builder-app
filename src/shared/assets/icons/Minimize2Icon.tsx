interface Minimize2IconProps {
  className?: string;
}

const Minimize2Icon = ({ className }: Minimize2IconProps) => (
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
      d="M16.217 8.217a1.043 1.043 0 0 1 2.087 0v2.003l2.74-2.74a1.043 1.043 0 0 1 1.476 1.475l-2.74 2.74h2.003a1.043 1.043 0 1 1 0 2.088H17.26a1.044 1.044 0 0 1-1.044-1.044zm-8 10.087a1.043 1.043 0 1 1 0-2.087h4.522a1.043 1.043 0 0 1 1.044 1.044v4.522a1.044 1.044 0 0 1-2.087 0V19.78l-2.74 2.74a1.043 1.043 0 0 1-1.476-1.475l2.74-2.74z"
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
export default Minimize2Icon;
