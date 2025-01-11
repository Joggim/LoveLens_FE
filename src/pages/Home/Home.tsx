import React from 'react';
import { Container } from './Home.styles';
import NavBar from '../../components/NavBar/NavBar';

const HomePage: React.FC = () => {
  return (
    <Container>
      <h1>Home</h1>
      <NavBar />
    </Container>
  );
};

export default HomePage;
