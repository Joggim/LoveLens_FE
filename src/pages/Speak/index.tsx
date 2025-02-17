import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Card } from './styles';
import TopBar from '../../components/TopBar';
import { StyledText } from '../../components/StyledText/StyledText.styles';
import CircleButton from '../../components/CircleButton';
import Microphone from '../../components/Icons/Microphone';
import theme from '../../styles/theme';

const SpeakPage: React.FC = () => {
  const location = useLocation();

  const { korean, translation } = location.state || {
    korean: '문장이 없습니다.',
    translation: 'No translation available.',
  };

  const handleMicClick = () => {};

  return (
    <Container>
      <TopBar />
      <Card>
        <StyledText $variant="headingM" color={theme.colors.text.primary}>
          {korean}
        </StyledText>
        <StyledText
          $variant="captionRegular"
          color={theme.colors.text.secondary}
        >
          {translation}
        </StyledText>
        <CircleButton
          size="big"
          bgColor={theme.colors.brand.primary}
          color={theme.colors.white}
          icon={<Microphone />}
          onClick={handleMicClick}
        />
      </Card>
    </Container>
  );
};

export default SpeakPage;
