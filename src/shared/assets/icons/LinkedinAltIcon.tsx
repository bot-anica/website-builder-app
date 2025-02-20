interface LinkedinAltIconProps {
  className?: string;
}

const LinkedinAltIcon = ({ className }: LinkedinAltIconProps) => (
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
      d="M25.223 3H4.772C3.792 3 3 3.806 3 4.802v21.391C3 27.19 3.792 28 4.772 28h20.451c.98 0 1.777-.81 1.777-1.802V4.802C27 3.806 26.203 3 25.223 3M10.12 24.304H6.558V12.37h3.562zm-1.78-13.56c-1.145 0-2.068-.962-2.068-2.148s.923-2.149 2.067-2.149c1.14 0 2.063.962 2.063 2.149 0 1.181-.924 2.148-2.063 2.148m15.112 13.56h-3.558v-5.801c0-1.382-.024-3.164-1.852-3.164-1.851 0-2.133 1.509-2.133 3.066v5.899h-3.553V12.37h3.413v1.631h.047c.473-.937 1.636-1.929 3.365-1.929 3.605 0 4.27 2.471 4.27 5.684z"
    />
  </svg>
);
export default LinkedinAltIcon;
