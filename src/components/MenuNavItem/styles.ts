import styled from 'styled-components';

interface ContainerProps {
  active: boolean
}

export const Container = styled.a<ContainerProps>`
  height: 80px;
  width: fit-content;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.title};
  background-color: ${({ theme, active }) => active ? theme.colors.highlight : '' };
  border-radius: 8px;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-family: 'Audiowide', 'Arial', sans-serif;
  padding: 0 8px;
`;