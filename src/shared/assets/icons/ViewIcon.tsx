interface ViewIconProps {
  className?: string;
}

const ViewIcon = ({ className }: ViewIconProps) => (
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
      d="M5.48 14.307c2.072 2.608 4.076 4.158 5.928 4.985 1.99.889 3.864.97 5.575.568 3.18-.75 5.889-3.203 7.562-5.51-4.076-4.801-8.051-5.647-11.337-4.956-3.21.675-5.984 2.863-7.729 4.913m7.279-7.048c4.365-.918 9.328.473 14.004 6.354.292.368.316.88.06 1.274-1.77 2.723-5.095 6.097-9.34 7.096-2.154.507-4.517.394-6.965-.7-2.433-1.086-4.888-3.113-7.3-6.337a1.09 1.09 0 0 1 .004-1.313c1.871-2.465 5.299-5.483 9.537-6.374"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15 16.819a2.182 2.182 0 1 0 0-4.364 2.182 2.182 0 0 0 0 4.364M15 19a4.364 4.364 0 1 0 0-8.728 4.364 4.364 0 0 0 0 8.728"
      clipRule="evenodd"
    />
  </svg>
);
export default ViewIcon;
