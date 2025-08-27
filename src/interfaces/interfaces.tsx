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

export interface SquareData {
  x: string;
  y: string;
  width: number;
  height: number;
  icon?: React.ReactNode;
  className?: string; // <- nova propriedade
}

export interface FloatingSquareProps {
  isLogin?: boolean;
}

export interface WaveTextProps {
  text: string;
}