import React from 'react';
import { ButtonContainer, Logo } from './styles';
import { SocialLoginButtonProps } from './dto';
import { StyledText } from '../../../components/StyledText/StyledText.styles';
import theme from '../../../styles/theme';

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  logo,
  name,
  color,
  textColor,
}) => {
  return (
    <ButtonContainer $backgroundColor={color}>
      <Logo src={logo} alt={`${name} logo`} />
      <StyledText $variant="bodyMediumBold" color={textColor}>
        {name}로 계속하기
      </StyledText>
    </ButtonContainer>
  );
};

export default SocialLoginButton;
