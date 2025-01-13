import styled from 'styled-components';
import theme from '../../../styles/theme';

interface LogInButtonProps {
  $backgroundColor: string;
  $textColor?: string;
}

export const ButtonContainer = styled.button<LogInButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 8px;
  width: 100%;
  padding: 0 30px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $textColor, theme }) => $textColor || theme.colors.text.primary};

  span {
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 36px;
  height: 36px;
`;
