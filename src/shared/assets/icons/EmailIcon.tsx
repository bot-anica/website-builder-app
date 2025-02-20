interface EmailIconProps {
  className?: string;
}

const EmailIcon = ({ className }: EmailIconProps) => (
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
      d="M26 8H4v14h22zM4 6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.317 6.27a1 1 0 0 1 1.413.047l7.7 8.235C13.457 15.65 14.09 16 15 16a1 1 0 1 1 0 2c-1.729 0-2.856-.825-4.03-2.082l-7.7-8.235a1 1 0 0 1 .047-1.413"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M26.683 6.27a1 1 0 0 0-1.413.047l-7.7 8.235C16.544 15.65 15.91 16 15 16a1 1 0 1 0 0 2c1.729 0 2.856-.825 4.03-2.082l7.7-8.235a1 1 0 0 0-.047-1.413"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.293 14.293a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414l-7-7a1 1 0 0 0-1.414 0M11.707 14.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0"
      clipRule="evenodd"
    />
  </svg>
);
export default EmailIcon;
