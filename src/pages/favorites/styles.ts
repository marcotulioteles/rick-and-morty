import styled from 'styled-components';

export const Container = styled.div`
  width: 1030px;
`;

export const Content = styled.div`
  width: 920px;
  height: 560px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 24px;
  margin: 24px 0;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.highlight};
    border-radius: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const Title = styled.div`
  position: absolute;
  top: -80px;
`;