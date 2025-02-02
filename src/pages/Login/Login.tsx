import React from 'react';
import { Container, ButtonList } from './Login.styles';
import SocialLoginButton from './SocialLoginButton';
import theme from '../../styles/theme';
import Google from './google.svg';
import Kakao from './kakao.svg';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <ButtonList>
        <SocialLoginButton
          logo={Google}
          name="Google"
          bgColor="#474747"
          textColor={theme.colors.text.white}
        />
        <SocialLoginButton logo={Kakao} name="Kakao" bgColor="#FEE500" />
      </ButtonList>
    </Container>
  );
};

export default LoginPage;
