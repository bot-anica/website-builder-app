interface ShopIconProps {
  className?: string;
}

const ShopIcon = ({ className }: ShopIconProps) => (
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
      d="M6.714 10.191c.057-.53.504-.93 1.037-.93h15.368c.532 0 .98.4 1.037.93l1.707 15.652A1.043 1.043 0 0 1 24.826 27H6.043a1.043 1.043 0 0 1-1.037-1.157zm1.973 1.157-1.48 13.565h16.456l-1.48-13.565z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.791 5.866c-.323.472-.443 1.074-.443 1.464v6.105a1.043 1.043 0 1 1-2.087 0V7.33c0-.704.193-1.746.809-2.644C12.724 3.733 13.82 3 15.435 3c1.614 0 2.711.733 3.365 1.686.616.898.809 1.94.809 2.644v6.105a1.044 1.044 0 0 1-2.087 0V7.33c0-.39-.12-.992-.444-1.464-.285-.416-.753-.779-1.643-.779s-1.359.363-1.644.78"
      clipRule="evenodd"
    />
  </svg>
);
export default ShopIcon;
