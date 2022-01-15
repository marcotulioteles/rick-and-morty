import styled from 'styled-components';

export const Container = styled.div`
  width: 1030px;

  height: 75%;

  @media (max-width: 1200px) {
    width: 90%;
    height: 75%;
    display: flex;
    justify-content: center;
   }
`;

export const Content = styled.div`
  width: 90%;
  height: 95%;
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

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  };
  
  @media only screen and (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  };
  
  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
    justify-items: center;
  }
`;

export const Title = styled.div`
  position: absolute;
  top: -80px;

  @media (max-width: 860px) {
    top: -100px;
  }
`;

export const EmptyMessageWrapper = styled.div`
  width: 90%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 2rem;
`;