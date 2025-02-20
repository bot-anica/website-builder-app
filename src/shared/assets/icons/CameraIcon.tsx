interface CameraIconProps {
  className?: string;
}

const CameraIcon = ({ className }: CameraIconProps) => (
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
      d="M8.714 7.429h12.572A5.714 5.714 0 0 1 27 13.143V20a5.714 5.714 0 0 1-5.714 5.714H8.714A5.714 5.714 0 0 1 3 20v-6.857a5.714 5.714 0 0 1 5.714-5.714m0 2.285a3.43 3.43 0 0 0-3.428 3.429V20a3.43 3.43 0 0 0 3.428 3.429h12.572A3.43 3.43 0 0 0 24.714 20v-6.857a3.43 3.43 0 0 0-3.428-3.429zM20.062 7.429A4 4 0 0 0 16.102 4H14.96A4 4 0 0 0 11 7.429h2.343a1.715 1.715 0 0 1 1.617-1.143h1.142c.747 0 1.382.477 1.617 1.143z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15 18.857a2.286 2.286 0 1 0 0-4.571 2.286 2.286 0 0 0 0 4.571m0 2.286A4.571 4.571 0 1 0 15 12a4.571 4.571 0 0 0 0 9.143"
      clipRule="evenodd"
    />
  </svg>
);
export default CameraIcon;
