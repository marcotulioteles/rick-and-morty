import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { IEpisode } from '../../store/modules/episodes-rick-and-morty/types';
import { CharacterInfoCard } from '../CharacterInfoCard';

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
  const clickedEpisode = useSelector<IState, IEpisode>(state => state.episodesGlobalState.clickedEpisode);

  return (
    <Container>
      {clickedEpisode &&
        <Content>
          <InfoEpisodeTextContent>
            <InfoEpisodeNumber>episode {clickedEpisode.id}</InfoEpisodeNumber>
            <InfoEpisodeTitle>{clickedEpisode.name}</InfoEpisodeTitle>
            <InfoEpisodeDateRelease>air date: {clickedEpisode.air_date}</InfoEpisodeDateRelease>
          </InfoEpisodeTextContent>
          <CharactersContainer>
            <CharactersTitleContainer>characters in this<br />episode</CharactersTitleContainer>
            <CharactersInfoContent>
              {clickedEpisode.characters.map(character => (
                <CharacterInfoCard
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  species={character.species}
                  status={character.status}
                  image={character.image}
                />
              ))}
            </CharactersInfoContent>
          </CharactersContainer>
        </Content>}
    </Container>
  );
}