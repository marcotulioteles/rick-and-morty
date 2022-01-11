import React from 'react'
import Image from 'next/image';
// import { EpisodeInfoPage } from '../../components/EpisodeInfoPage'
import { MainWrapper } from '../../components/MainWrapper'

import {
  Container,
  Content,
  Title
} from './styles'
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { IEpisode } from '../../store/modules/episodes-rick-and-morty/types';
import { EpisodeInfoCard } from '../../components/EpisodeInfoCard';

const TitleImage = "/images/rick-and-morty-title.png";

export default function Favorites() {
  const favoriteEpisodes = useSelector<IState, IEpisode[]>(state => state.episodesGlobalState.favorites);

  console.log(favoriteEpisodes);

  return (
    <MainWrapper>
      {/* <EpisodeInfoPage /> */}
      <Container>
        <Content>
          {favoriteEpisodes.map(episode => (
            <EpisodeInfoCard
              clickedEpisodeInfoCard={episode}
              key={`episodeId${episode.id}`}
              episodeNumber={
                Number(episode.id) < 10
                  ? `0${String(episode.id)}`
                  : String(episode.id)
              }
              title={episode.name}
              date={episode.air_date}
              charactersNumber={String(episode.characters.length)}
              episodeID={episode.id}
              active={episode.favorite}
              onClick={() => {}}
            />
          ))}
        </Content>
      </Container>
      <Title>
        <Image
          src={TitleImage}
          alt='Rick and Morty Title'
          width={418}
          height={137}
        />
      </Title>

    </MainWrapper>
  )
}