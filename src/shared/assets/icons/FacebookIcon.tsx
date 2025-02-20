interface FacebookIconProps {
  className?: string;
}

const FacebookIcon = ({ className }: FacebookIconProps) => (
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
      d="M4.4 22V7.6h8.53v2.09H6.49v4.06h5.24v2.1H6.49V22zM19.802 22.3q-1.55 0-2.6-.75-1.05-.76-1.59-2.05t-.54-2.91.53-2.91q.54-1.29 1.58-2.03 1.05-.75 2.58-.75 1.52 0 2.62.75 1.11.74 1.71 2.03.6 1.28.6 2.91 0 1.62-.6 2.92-.59 1.29-1.69 2.04-1.09.75-2.6.75m-5.08-.3V7.6h2.1v6.63h-.24V22zm4.79-1.59q1 0 1.65-.51.66-.51.98-1.37.33-.87.33-1.94 0-1.06-.33-1.92-.32-.86-.99-1.37t-1.71-.51q-.98 0-1.62.48-.63.48-.94 1.34-.3.86-.3 1.98t.3 1.98.95 1.35 1.68.49"
    />
  </svg>
);
export default FacebookIcon;
