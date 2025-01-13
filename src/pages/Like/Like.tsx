import React from 'react';
import { Container } from './Like.styles';
import NavBar from '../../components/NavBar/NavBar';

const LikePage: React.FC = () => {
  return (
    <Container>
      <h1>Like</h1>
      <NavBar />
    </Container>
  );
};

export default LikePage;
