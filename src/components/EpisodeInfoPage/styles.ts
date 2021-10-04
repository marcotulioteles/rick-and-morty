import styled from 'styled-components';

export const Container = styled.div`
  width: 1030px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 32px 0;
`;

export const Content = styled.div`
  width: 860px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoEpisodeTextContent = styled.div` 
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const InfoEpisodeNumber = styled.h1`
  font-size: 2rem;
  font-family: 'Audiowide', 'Arial', sans-serif;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.highlight};
  text-transform: lowercase;
`;

export const InfoEpisodeTitle = styled.h2`
  font-size: 4rem;
  font-family: 'Audiowide', 'Arial', sans-serif;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.title};
  padding-right: 16px;
`;

export const InfoEpisodeDateRelease = styled.span`
  font-size: 2rem;
  font-family: 'Exo 2', 'Arial', sans-serif;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  padding-right: 16px;
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
  height: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  margin-bottom: 32px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme }) => theme.colors.highlight };
    border-radius: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({theme }) => theme.colors.background };
  }
`;