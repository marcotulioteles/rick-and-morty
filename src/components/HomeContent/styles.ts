import styled from 'styled-components';

export const Container = styled.div`
  width: 1030px;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media(max-width: 1200px) {
    width: 90%;
    height: 80%;
    align-items: center;
  }
`;

export const TitleContent = styled.div`
  margin-top: 32px;
  max-width: 640px;
  display: flex;

  @media(max-width: 560px) {
    width: 90%;
    max-height: 540px;
  }
`;

export const TitleAndSubtitle = styled.div`
`;

export const Subtitle = styled.h2`
  text-align: left;
  text-transform: lowercase;
  font-family: 'Audiowide', 'Arial', sans-serif;
  color: ${({ theme }) => theme.colors.title};
  font-size: 3rem;
  font-weight: normal;

  @media(max-width: 850px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  max-width: 640px;
  margin-top: 56px;
  font-family: 'Exo 2', 'Arial', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  @media(max-width: 850px) {
    width: 90%;
    text-align: center;
  }
`;

export const Portal = styled.div`
  animation: spin 45s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media(max-width: 850px) {
    display: none;
  }
`;

export const RickAndMortyImageContainer = styled.div`
  position: absolute;
  right: -32px;

  @media(max-width: 1200px) {
    display: none
  }
`;

export const ContentEpisodeCards = styled.div`
  width: 90%;
  height: 480px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 1.5rem;
  padding: 2rem 2rem 2rem 0;
  margin-top: 2rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  };

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.highlight};
    border-radius: 0.25rem;
  };

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.background};
  };
  
  @media only screen and (max-width: 1200px) {
    height: 85%;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  };
  
  @media only screen and (max-width: 860px) {
    height: 85%;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  };
  
  @media only screen and (max-width: 600px) {
    height: 85%;
    grid-template-columns: auto;
    justify-items: center;
    padding: 0;
  }

  @media(max-height: 900px) {
    height: 60%
  }
`;

export const LoadingImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 128px;
`;
