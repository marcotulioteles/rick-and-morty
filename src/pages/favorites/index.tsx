import React, { useCallback } from 'react'
import Image from 'next/image';
import { MainWrapper } from '../../components/MainWrapper'

import {
  Container,
  Content,
  Title
} from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { IEpisode } from '../../store/modules/episodes-rick-and-morty/types';
import { EpisodeInfoCard } from '../../components/EpisodeInfoCard';
import { addEpisodeToFavoritesList } from '../../store/modules/episodes-rick-and-morty/actions';

const TitleImage = "/images/rick-and-morty-title.png";

export default function Favorites() {
  const dispatch = useDispatch();

  const allEpisodes = useSelector<IState, IEpisode[]>(state => state.episodesGlobalState.allEpisodes);

  const handleEpisodeToFavoritesList = useCallback((episodeId: string) => {
    dispatch(addEpisodeToFavoritesList(episodeId));
  }, [dispatch])

  return (
    <MainWrapper>
      <Container>
        <Content>
          {allEpisodes.filter(favoriteEpisode => favoriteEpisode.favorite === true).map(episode => (
            <EpisodeInfoCard
              key={`episodeId${episode.id}`}
              episodeNumber={
                Number(episode.id) < 10
                  ? `0${String(episode.id)}`
                  : String(episode.id)
              }
              title={episode.name}
              date={episode.air_date}
              charactersNumber={String(episode.characters.length)}
              favoriteActive={episode.favorite}
              onClickFavorite={() => {
                handleEpisodeToFavoritesList(episode.id)
              }}
              episode={episode}
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