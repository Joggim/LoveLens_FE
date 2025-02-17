import React from 'react';
import { Container } from './Talk.styles';
import NavBar from '../../components/NavBar/NavBar';

const TalkPage: React.FC = () => {
  return (
    <Container>
      <h1>Talk</h1>
      <NavBar />
    </Container>
  );
};

export default TalkPage;
