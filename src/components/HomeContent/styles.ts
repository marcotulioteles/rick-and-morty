import styled from 'styled-components';

export const Container = styled.div`
  width: 1030px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const TitleContent = styled.div`
  margin-top: 32px;
  max-width: 640px;
  display: flex;
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
`;

export const Text = styled.p`
  max-width: 640px;
  margin-top: 56px;
  font-family: 'Exo 2', 'Arial', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
`;

export const Portal = styled.div`
  animation: spin 45s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const RickAndMortyImageContainer = styled.div`
  position: absolute;
  right: -32px;
`;

export const ContentEpisodeCards = styled.div`
  width: 90%;
  height: 480px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 24px;
  padding: 32px 32px 32px 0;
  margin-top: 32px;
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

export const LoadingImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 128px;
`;
