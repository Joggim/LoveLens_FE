import React from 'react';
import { Container } from './Chat.styles';
import NavBar from '../../components/NavBar/NavBar';

const ChatPage: React.FC = () => {
  return (
    <Container>
      <h1>Chat</h1>
      <NavBar />
    </Container>
  );
};

export default ChatPage;
