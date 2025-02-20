interface SpeechIconProps {
  className?: string;
}

const SpeechIcon = ({ className }: SpeechIconProps) => (
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
      d="M6.576 5.834c-.216.32-.29.754-.29 1.07v16.533l3.775-3.107c.205-.168.462-.26.726-.26h12.67c.351 0 .542-.077.644-.14a.7.7 0 0 0 .26-.294c.167-.322.21-.774.21-1.184V6.653c0-.781-.168-1.01-.255-1.09-.115-.105-.44-.277-1.361-.277H7.902c-.836 0-1.16.302-1.326.548m-1.894-1.28C5.3 3.64 6.356 3 7.902 3h15.053c1.084 0 2.14.179 2.904.877.79.723.998 1.75.998 2.776v11.799c0 .468-.031 1.396-.467 2.236-.228.44-.577.874-1.095 1.192s-1.137.476-1.839.476H11.197L5.87 26.74A1.143 1.143 0 0 1 4 25.857V6.904c0-.562.114-1.509.682-2.35"
      clipRule="evenodd"
    />
  </svg>
);
export default SpeechIcon;
