import React from 'react';
import { Container, IconWrapper } from './styles';
import { CircleButtonProps } from './dto';

const CircleButton: React.FC<CircleButtonProps> = ({
  size,
  bgColor,
  color,
  icon,
  onClick,
}) => {
  return (
    <Container size={size} bgColor={bgColor} onClick={onClick}>
      <IconWrapper size={size} color={color}>
        {icon}
      </IconWrapper>
    </Container>
  );
};

export default CircleButton;
