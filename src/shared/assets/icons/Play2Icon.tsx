interface Play2IconProps {
  className?: string;
}

const Play2Icon = ({ className }: Play2IconProps) => (
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
      d="M13.236 11.45a.332.332 0 0 1 .528-.268l4.983 3.654a.332.332 0 0 1 0 .536l-4.982 3.654a.332.332 0 0 1-.53-.268z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m13.418 11.154.16.314zm.347.028.208-.285zm4.982 3.654.209-.285zm0 .536.209.284zm-4.982 3.654-.21-.285zm-.347.028.16-.315zm-.16-8.215a.69.69 0 0 0-.375.61h.706a.02.02 0 0 1-.012.02zm.715.058a.69.69 0 0 0-.715-.058l.32.63a.02.02 0 0 1-.022-.002zm4.983 3.654-4.983-3.654-.417.57 4.982 3.654zm.28.553a.69.69 0 0 0-.28-.553l-.418.57a.02.02 0 0 1-.008-.017zm-.28.552a.69.69 0 0 0 .28-.552h-.706a.02.02 0 0 1 .008-.017zm-4.983 3.654 4.983-3.654-.418-.569-4.982 3.654zm-.715.059c.23.117.507.094.715-.059l-.417-.569a.02.02 0 0 1 .021-.002zm-.375-.611c0 .258.145.494.375.61l.32-.629a.02.02 0 0 1 .01.019zm0-7.308v7.308h.706V11.45z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15 24.882c5.458 0 9.882-4.424 9.882-9.882S20.458 5.118 15 5.118 5.118 9.542 5.118 15 9.542 24.882 15 24.882M15 27c6.627 0 12-5.373 12-12S21.627 3 15 3 3 8.373 3 15s5.373 12 12 12"
      clipRule="evenodd"
    />
  </svg>
);
export default Play2Icon;
