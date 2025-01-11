import React from 'react';
import { Container } from './MyPage.styles';
import NavBar from '../../components/NavBar/NavBar';

const MyPage: React.FC = () => {
  return (
    <Container>
      <h1>MyPage</h1>
      <NavBar />
    </Container>
  );
};

export default MyPage;
