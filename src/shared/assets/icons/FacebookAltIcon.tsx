interface FacebookAltIconProps {
  className?: string;
}

const FacebookAltIcon = ({ className }: FacebookAltIconProps) => (
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
      d="M27 14.576C27 7.631 21.404 2 14.5 2S2 7.63 2 14.576C2 20.854 6.571 26.056 12.547 27v-8.788H9.373v-3.636h3.174v-2.77c0-3.152 1.866-4.893 4.721-4.893 1.367 0 2.798.245 2.798.245v3.095H18.49c-1.552 0-2.037.97-2.037 1.965v2.358h3.467l-.554 3.636h-2.913V27C22.43 26.056 27 20.854 27 14.576"
    />
  </svg>
);
export default FacebookAltIcon;
