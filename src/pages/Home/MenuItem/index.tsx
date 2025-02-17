import React from 'react';
import { Container, Left } from './styles';
import { MenuItemProps } from './dto';
import { StyledText } from '../../../components/StyledText/StyledText.styles';
import ArrowRight from '../../../components/Icons/ArrowRight';
import theme from '../../../styles/theme';

const MenuItem: React.FC<MenuItemProps> = ({
  bgColor,
  fontColor,
  title,
  content,
}) => {
  return (
    <Container color={bgColor}>
      <Left>
        <StyledText $variant="headingM" color={fontColor}>
          {title}
        </StyledText>
        <StyledText $variant="captionRegular" color={fontColor}>
          {content}
        </StyledText>
      </Left>

      <ArrowRight width="30" height="30" color={theme.colors.black} />
    </Container>
  );
};

export default MenuItem;
