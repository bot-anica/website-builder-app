interface ProfileIconProps {
  className?: string;
}

const ProfileIcon = ({ className }: ProfileIconProps) => (
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
      d="M14.918 25.837c6.03 0 10.918-4.889 10.918-10.919S20.948 4 14.918 4 4 8.888 4 14.918s4.888 10.919 10.918 10.919m0 2.081c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.91 23.291a10.87 10.87 0 0 0 7.008 2.546 10.86 10.86 0 0 0 6.181-1.917 7.132 7.132 0 0 0-13.189-.629m15.542 1.434A9.212 9.212 0 0 0 5.49 23.87a12.96 12.96 0 0 0 9.427 4.05 12.95 12.95 0 0 0 8.534-3.194M14.918 13.92a3.335 3.335 0 1 0 0-6.67 3.335 3.335 0 0 0 0 6.67m0 2.082a5.417 5.417 0 1 0 0-10.834 5.417 5.417 0 0 0 0 10.834"
      clipRule="evenodd"
    />
  </svg>
);
export default ProfileIcon;
