interface itemProps {
  component: React.ComponentType; // Isso permite passar um componente React
  text: string;
  color: string;
}

const SliderItem: React.FC<itemProps> = ({
  component: ImgComponent,
  text,
  color,
}) => {
  return (
    <figure style={{ border: `2px solid ${color}` }} className="sliderItem">
      <ImgComponent />
      <span>{text}</span>
    </figure>
  );
};
export default SliderItem;
