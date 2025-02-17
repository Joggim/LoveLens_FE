import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.background.black3};
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background.white};
`;
