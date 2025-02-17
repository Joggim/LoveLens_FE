import React from 'react';
import { Container } from './styles';
import NavBar from '../../components/NavBar/NavBar';

const CustomSentencePage: React.FC = () => {
  return (
    <Container>
      <h1>Custom Sentence</h1>
      <NavBar />
    </Container>
  );
};

export default CustomSentencePage;
