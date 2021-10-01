import styled from 'styled-components';

export const Container = styled.a`
  height: 80px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.title};
`;

export const Title = styled.span`
  font-size: 1rem;
  font-family: 'Audiowide', 'Arial', sans-serif;
`;