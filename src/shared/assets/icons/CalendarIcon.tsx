interface CalendarIconProps {
  className?: string;
}

const CalendarIcon = ({ className }: CalendarIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 30 30"
    className={className}
  >
    <path
      fill="#fff"
      d="M11 5.667H7.267c-1.494 0-2.24 0-2.811.29-.502.256-.91.664-1.165 1.166C3 7.693 3 8.44 3 9.933v12.8c0 1.494 0 2.24.29 2.811.256.502.664.91 1.166 1.165.57.291 1.317.291 2.81.291h15.467c1.494 0 2.24 0 2.811-.29.502-.256.91-.664 1.165-1.166.291-.57.291-1.317.291-2.81v-12.8c0-1.494 0-2.24-.29-2.811a2.67 2.67 0 0 0-1.166-1.166c-.57-.29-1.317-.29-2.81-.29H11"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.017 4.677q-.315.007-.583.03c-.507.04-.982.13-1.432.36-.69.35-1.25.912-1.602 1.602-.23.45-.319.925-.36 1.431C2 8.586 2 9.18 2 9.893v12.88c0 .713 0 1.308.04 1.793.041.507.13.982.36 1.432.351.69.912 1.25 1.602 1.602.45.23.925.319 1.432.36.485.04 1.08.04 1.792.04h15.548c.712 0 1.307 0 1.792-.04.507-.041.982-.13 1.432-.36a3.67 3.67 0 0 0 1.602-1.602c.23-.45.319-.925.36-1.432.04-.485.04-1.08.04-1.792V9.893c0-.712 0-1.307-.04-1.793-.041-.506-.13-.982-.36-1.431a3.67 3.67 0 0 0-1.602-1.603c-.45-.229-.925-.318-1.432-.36a11 11 0 0 0-.583-.03 3 3 0 0 0-5.965-.01h-6.036a3 3 0 0 0-5.965.01m2.04-.01h1.886a1 1 0 0 0-1.886 0m12 0h1.886a1 1 0 0 0-1.886 0M26 10v-.067c0-.763 0-1.275-.033-1.67-.031-.383-.087-.566-.149-.686a1.67 1.67 0 0 0-.728-.729c-.12-.061-.304-.117-.687-.148-.394-.033-.906-.033-1.67-.033H7.267c-.764 0-1.276 0-1.67.033-.383.031-.566.087-.687.148-.314.16-.569.415-.728.729-.062.12-.118.303-.149.686C4.001 8.658 4 9.17 4 9.933V10zM4 12h22v10.733c0 .764 0 1.276-.033 1.67-.031.383-.087.566-.149.687-.16.314-.414.569-.728.728-.12.062-.304.118-.687.149-.394.032-.906.033-1.67.033H7.267c-.764 0-1.276 0-1.67-.033-.383-.031-.566-.087-.687-.149a1.67 1.67 0 0 1-.728-.728c-.062-.12-.118-.304-.149-.687-.032-.394-.033-.906-.033-1.67zm15.707 2.293a1 1 0 0 1 0 1.414l-4.862 4.862c-.65.65-1.706.65-2.357 0l-2.195-2.195a1 1 0 1 1 1.414-1.414l1.96 1.96 4.626-4.627a1 1 0 0 1 1.414 0"
      clipRule="evenodd"
    />
  </svg>
);
export default CalendarIcon;
