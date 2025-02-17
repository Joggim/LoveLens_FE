import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { StyledText } from '../../components/StyledText/StyledText.styles';
import theme from '../../styles/theme';

const SpeakPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { korean, translation } = location.state || {
    korean: '문장이 없습니다.',
    translation: 'No translation available.',
  };

  return (
    <Container>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
      <StyledText $variant="headingM" color={theme.colors.text.primary}>
        {korean}
      </StyledText>
      <StyledText $variant="captionRegular" color={theme.colors.text.secondary}>
        {translation}
      </StyledText>
    </Container>
  );
};

export default SpeakPage;
