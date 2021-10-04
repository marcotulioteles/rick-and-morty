import React from 'react';

import {
  Container,
  Content,
  CharactersContainer,
  CharactersTitleContainer,
  CharactersInfoContent,
  InfoEpisodeTextContent,
  InfoEpisodeDateRelease,
  InfoEpisodeNumber,
  InfoEpisodeTitle,
} from './styles'

export function EpisodeInfoPage() {
  return (
    <Container>
      <Content>
        <InfoEpisodeTextContent>
          <InfoEpisodeNumber>episode 02</InfoEpisodeNumber>
          <InfoEpisodeTitle>Cãotador de grama</InfoEpisodeTitle>
          <InfoEpisodeDateRelease>date release: 01/01/2017</InfoEpisodeDateRelease>
        </InfoEpisodeTextContent>
        <CharactersContainer>
          <CharactersTitleContainer>characters in this<br/>episode</CharactersTitleContainer>
          <CharactersInfoContent>

          </CharactersInfoContent>
        </CharactersContainer>
      </Content>
    </Container>
  );
}