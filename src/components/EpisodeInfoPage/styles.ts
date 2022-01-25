import styled from 'styled-components';

export const Container = styled.div`
  width: 1030px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0;

  @media (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 860px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const InfoEpisodeTextContent = styled.div`
  max-width: 50%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 1200px) {
    max-width: 75%;
    text-align: center;
    margin-bottom: 2rem;
   }
`;

export const InfoEpisodeNumber = styled.h1`
  font-size: 2rem;
  font-family: 'Audiowide', 'Arial', sans-serif;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.highlight};
  text-transform: lowercase;
`;

export const InfoEpisodeTitle = styled.h2`
  font-size: 3.5rem;
  font-family: 'Audiowide', 'Arial', sans-serif;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.title};
  padding-right: 16px;
  word-wrap: break-word;

  @media (max-width: 1200px) {
    font-size: 2.5rem;
   }
`;

export const InfoEpisodeDateRelease = styled.span`
  font-size: 2rem;
  font-family: 'Exo 2', 'Arial', sans-serif;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  padding-right: 16px;

  @media (max-width: 1200px) {
    font-size: 1.5rem;
   }
`;

export const CharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 1200px) {
    height: 50%;
    width: 75%;
    text-align: center;
  }
`;

export const CharactersTitleContainer = styled.h1`
  font-family: 'Audiowide', 'Arial', sans-serif;
  font-size: 1.25rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.title};
  text-transform: lowercase;
  text-align: center;
  margin: 32px 0;
`;

export const CharactersInfoContent = styled.div`
  width: 90%;
  height: 420px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 32px;
  justify-items: center;
  margin-bottom: 32px;

  overflow-y: scroll;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

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