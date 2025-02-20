interface InternetIconProps {
  className?: string;
}

const InternetIcon = ({ className }: InternetIconProps) => (
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
      d="M27 15c0 6.627-5.373 12-12 12S3 21.627 3 15 8.373 3 15 3s12 5.373 12 12m-13.906 9.819c-1.722-2.746-2.494-5.554-2.661-8.22H5.127a10.01 10.01 0 0 0 7.967 8.22m-8.086-10.22h5.41c.173-3.774 1.457-7.133 2.773-9.436-4.532.828-7.997 4.711-8.183 9.437m19.865 2a10.01 10.01 0 0 1-6.528 7.828 17.3 17.3 0 0 0 2.422-7.827zm.12-2c-.167-4.224-2.954-7.775-6.781-9.072 1.242 2.286 2.406 5.492 2.57 9.073zM15.6 5.082c1.397 2.02 2.98 5.515 3.177 9.519h-6.354c.196-4.004 1.78-7.5 3.177-9.519M12.445 16.6h6.31c-.196 2.719-1.1 5.589-3.155 8.337-2.056-2.748-2.96-5.618-3.155-8.337"
      clipRule="evenodd"
    />
  </svg>
);
export default InternetIcon;
