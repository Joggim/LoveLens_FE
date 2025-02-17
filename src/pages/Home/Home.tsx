import React from 'react';
import { Container, MenuContainer } from './Home.styles';
import NavBar from '../../components/NavBar/NavBar';
import MenuItem from './MenuItem';
import theme from '../../styles/theme';

const HomePage: React.FC = () => {
  return (
    <Container>
      <h1>K-Talk</h1>
      <MenuContainer>
        <MenuItem
          bgColor={theme.colors.brand.primary}
          fontColor={theme.colors.text.white}
          title="내 문장으로 연습하기"
          content="내가 훈련하고 싶은 문장으로 읽기"
        />
        <MenuItem
          bgColor={theme.colors.brand.secondary}
          fontColor={theme.colors.text.white}
          title="문장 읽기"
          content="정해진 문장을 읽으며 발음 연습하기"
        />
      </MenuContainer>
      <NavBar />
    </Container>
  );
};

export default HomePage;
