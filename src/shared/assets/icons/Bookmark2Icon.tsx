interface Bookmark2IconProps {
  className?: string;
}

const Bookmark2Icon = ({ className }: Bookmark2IconProps) => (
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
      d="M7.413 5.547c-.165.229-.231.537-.231.726v17.53l7.553-5.33a1.09 1.09 0 0 1 1.31.039l6.41 5.127V6.273c0-.517-.191-.735-.365-.86a1.35 1.35 0 0 0-.726-.231H8.273c-.517 0-.735.19-.86.365M5.642 4.272C6.172 3.536 7.044 3 8.272 3h13.092c.538 0 1.32.152 2 .642.736.53 1.272 1.402 1.272 2.63V25.91a1.09 1.09 0 0 1-1.772.852l-7.541-6.033L6.72 26.8A1.091 1.091 0 0 1 5 25.91V6.272c0-.538.152-1.322.642-2.001"
      clipRule="evenodd"
    />
  </svg>
);
export default Bookmark2Icon;
