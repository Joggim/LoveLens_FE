import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  height: 100vh;
  width: 100%;
  position: relative;
  padding: 20px;
`;

interface LogInButtonProps {
  $backgroundColor?: string; // Props with the prefix `$` to denote styled-component specific props
}

export const LogInButton = styled.button<LogInButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 8px;
  width: auto;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || '#6C57E2'}; // Default color if not provided
`;
