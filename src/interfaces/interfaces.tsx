export interface IconsProps {
  size: number;
}

export interface BtnProps {
  label: string;
  filled?: boolean;
  onClick?: () => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}
        
export interface FloatingSquareProps {
  isLogin?: boolean;
}
  
export interface TypingTextProps {
  text: string;
  speed?: number;
}

export interface WaveTextProps {
  text: string;
}
  
export interface SquareData {
  x: string;
  y: string;
  width: number;
  height: number;
  icon?: React.ReactNode;
  className?: string;
}

export interface OptionProps {
  Icon: React.ReactNode;
  title: string;
  isCurrent?: boolean;
  open: boolean;
}

export interface WorldsData {
  id: string;
  worldName: string;
  waterColor: string;
  landColor: string;
  rotationDurationMs: number;
  rotationDirection?: "forward" | "reverse";
  rotationOffsetDeg?: number;
  continentSeed: number;
  continentCount: number;
}

export interface ChallegesData {
  worldId: string;
  chal: string;
}
