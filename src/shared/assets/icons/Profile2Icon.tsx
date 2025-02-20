interface Profile2IconProps {
  className?: string;
}

const Profile2Icon = ({ className }: Profile2IconProps) => (
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
      d="M15.047 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10M8.167 17.648C9.559 15.65 11.774 14 15.047 14s5.488 1.65 6.88 3.648c1.368 1.962 1.97 4.285 2.116 5.846l.057.616-.525.326c-7.478 4.643-14.491 1.951-17.132-.053L6 24.047l.052-.553c.145-1.56.747-3.884 2.115-5.846m-.052 5.465c2.408 1.55 7.888 3.35 13.856-.05-.206-1.259-.724-2.894-1.684-4.271-1.101-1.58-2.753-2.792-5.24-2.792s-4.139 1.212-5.24 2.792c-.972 1.395-1.49 3.055-1.692 4.32"
      clipRule="evenodd"
    />
  </svg>
);
export default Profile2Icon;
