import styled from 'styled-components';

interface ContainerProps {
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  background-color: ${({ color, theme }) =>
    color || theme.colors.brand.primary};
  cursor: pointer;
`;

export const Left = styled.div`
  display: flex;
  width: 210px;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
`;

export const Right = styled.div`
  display: flex;
  width: 210px;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
`;
