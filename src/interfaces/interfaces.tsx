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

export interface WorldsData {
  id: string;
  worldName: string;
}

export interface OptionProps {
  Icon: React.ReactNode;
  title: string;
  isCurrent?: boolean;
  open: boolean;
}

export interface ChallegesData {
  worldId: string;
  chal: string;
}

export interface WorldsData {
  id: string;
  worldName: string;
}