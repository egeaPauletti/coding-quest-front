export interface IconsProps {
  size: number;
}

export interface TypingTextProps {
  text: string;
  speed?: number;
};

export interface WaveTextProps {
  text: string;
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

export interface BtnProps {
  label: string;
  filled?: boolean;
  onClick?: () => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}