import type { IconsProps } from "../../../interfaces/interfaces";

const KotlinIcon: React.FC<IconsProps> = ({ size }) => {
  return (
    <svg
      widths={size}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0,0,256,256"
    >
      <g
        fill="#969696"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
      >
        <g transform="scale(5.12,5.12)">
          <path d="M46,46h-40l20,-20zM45,4l-41,41.17v-19.34l21.83,-21.83zM23,4l-19,19v-19z"></path>
        </g>
      </g>
    </svg>
  );
};
export default KotlinIcon;
