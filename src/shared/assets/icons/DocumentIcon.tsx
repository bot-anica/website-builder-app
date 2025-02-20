interface DocumentIconProps {
  className?: string;
}

const DocumentIcon = ({ className }: DocumentIconProps) => (
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
      d="M6.21 2.612A3.36 3.36 0 0 1 8.118 2h8.126l9.109 7.59v15.292c0 1.006-.625 1.733-1.163 2.17-.555.451-1.198.75-1.639.897l-.153.051H8.118c-1.173 0-2.003-.511-2.506-1.21A3.36 3.36 0 0 1 5 24.882V5.118c0-1.173.511-2.003 1.21-2.506m1.168 1.623c-.183.132-.378.362-.378.883v19.764c0 .193.066.505.235.74.132.183.362.378.883.378h13.941c.258-.102.594-.276.869-.5.344-.28.425-.494.425-.618V11.06H18c-1.173 0-2.003-.511-2.506-1.21a3.36 3.36 0 0 1-.612-1.908V4H8.118a1.37 1.37 0 0 0-.74.235m9.504.9v2.806c0 .193.066.505.235.74.133.183.362.378.883.378h3.59z"
      clipRule="evenodd"
    />
  </svg>
);
export default DocumentIcon;
