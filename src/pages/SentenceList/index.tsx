import React from 'react';
import { Container } from './styles';
import NavBar from '../../components/NavBar/NavBar';

const SentenceListPage: React.FC = () => {
  return (
    <Container>
      <h1>Sentence List</h1>
      <NavBar />
    </Container>
  );
};

export default SentenceListPage;
