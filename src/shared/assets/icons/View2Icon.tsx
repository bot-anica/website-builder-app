interface View2IconProps {
  className?: string;
}

const View2Icon = ({ className }: View2IconProps) => (
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
      d="M14.685 7c-5.07 0-9.44 3-11.429 7.327a2.81 2.81 0 0 0 0 2.346C5.245 20.999 9.616 24 14.686 24s9.44-3 11.428-7.327a2.81 2.81 0 0 0 0-2.346C24.126 10.001 19.754 7 14.685 7M1.44 13.492C3.742 8.482 8.806 5 14.685 5s10.944 3.482 13.247 8.492a4.81 4.81 0 0 1 0 4.016C25.629 22.518 20.565 26 14.685 26S3.742 22.518 1.44 17.508a4.81 4.81 0 0 1 0-4.016m13.246-1.063a3.071 3.071 0 1 0 0 6.143 3.071 3.071 0 0 0 0-6.143M9.614 15.5a5.071 5.071 0 1 1 10.143 0 5.071 5.071 0 0 1-10.143 0"
      clipRule="evenodd"
    />
  </svg>
);
export default View2Icon;
