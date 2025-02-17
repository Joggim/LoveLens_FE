export interface CircleButtonProps {
  size: 'big' | 'small';
  bgColor: string;
  color: string;
  icon: React.ReactNode;
  onClick?: () => void;
}
