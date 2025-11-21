import { useMemo, type CSSProperties } from "react";
import { generateContinents, type ContinentSpec } from "./helpers";

type PlanetIconProps = {
  waterColor: string;
  landColor: string;
  rotationDurationMs: number;
  rotationDirection?: "forward" | "reverse";
  rotationOffsetDeg?: number;
  continentSeed: number;
  continentCount: number;
};

const PlanetIcon: React.FC<PlanetIconProps> = ({
  waterColor,
  landColor,
  rotationDurationMs,
  rotationDirection = "forward",
  rotationOffsetDeg = 0,
  continentSeed,
  continentCount,
}) => {
  const baseContinents = useMemo<ContinentSpec[]>(
    () => generateContinents(continentSeed, continentCount),
    [continentSeed, continentCount]
  );

  const duration = Math.max(rotationDurationMs, 1200);
  const seedOffset = ((continentSeed % 360) + 360) % 360 / 360;
  const animationName =
    rotationDirection === "reverse" ? "planet-scroll-reverse" : "planet-scroll";
  const animationDelay =
    (((rotationDirection === "reverse" ? -seedOffset : seedOffset) % 1) + 1) % 1;

  const trackStyle: CSSProperties = {
    animation: `${animationName} ${duration}ms linear infinite`,
    animationDelay: `${-animationDelay * duration}ms`,
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className="relative flex items-center justify-center" style={{ transform: `rotate(${rotationOffsetDeg}deg)` }}>
        <div
          className="relative flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.35)] overflow-hidden transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundColor: waterColor }}
        >
          <div className="absolute inset-x-0 bottom-3 h-10 rounded-full bg-black/40 blur-xl opacity-50" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="planet-track relative h-full w-[200%]" style={trackStyle}>
              {[0, 1].flatMap((loop) =>
                baseContinents.map((continent, index) => (
                  <svg
                    key={`${continentSeed}-${index}-${loop}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    className="absolute top-1/2"
                    style={{
                      left: `${(continent.offset + loop) * 100}%`,
                      transform: `translate(-50%, -50%) translateY(${continent.verticalOffsetPercent}%) rotate(${continent.rotation}deg) scale(${continent.scale})`,
                      height: "72%",
                      opacity: 1,
                    }}
                  >
                    <path transform="translate(100 100)" d={continent.path} fill={landColor} />
                  </svg>
                ))
              )}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/30 mix-blend-soft-light pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default PlanetIcon;
