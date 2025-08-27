import type { WaveTextProps } from "../interfaces/interfaces";

const WaveText: React.FC<WaveTextProps> = ({ text }) => {
  return (
    <div className="waveAnimation">
      {text.split("").map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default WaveText;
