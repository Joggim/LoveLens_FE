import React from 'react';
import { ButtonContainer, Logo } from './styles';
import { SocialLoginButtonProps } from './dto';
import { StyledText } from '../../../components/StyledText/StyledText.styles';
import theme from '../../../styles/theme';

//const SERVER_URI = import.meta.env.VITE_NEW_API_URL;

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  logo,
  name,
  bgColor,
  textColor,
}) => {
  const handleSocialLoginClick = () => {
    /*
    // 리다이렉트 URL 설정
    const redirectUrl = encodeURIComponent(
      `${import.meta.env.VITE_DOMAIN || window.location.origin}/login/complete`
    );

    // 서버 URL 생성
    const serverUrl = `${SERVER_URI}/auth/login/${name}?redirectUrl=${redirectUrl}`;

    // 서버로 리다이렉션
    window.open(serverUrl, '_self');
    */
  };

  return (
    <ButtonContainer $bgColor={bgColor} onClick={handleSocialLoginClick}>
      <Logo src={logo} alt={`${name} logo`} />
      <StyledText $variant="bodyMediumBold" color={textColor}>
        {name}로 계속하기
      </StyledText>
    </ButtonContainer>
  );
};

export default SocialLoginButton;
