import React, { useCallback } from 'react'
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { MainWrapper } from '../../components/MainWrapper';
import { useTranslation } from 'next-i18next';

import {
  Container,
  Content,
  Title,
  EmptyMessageWrapper
} from '../../styles/pages/favorites';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { IEpisode } from '../../store/modules/episodes-rick-and-morty/types';
import { EpisodeInfoCard } from '../../components/EpisodeInfoCard';
import { addEpisodeToFavoritesList, addEpisodeToWatchedList } from '../../store/modules/episodes-rick-and-morty/actions';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const TitleImage = "/images/rick-and-morty-title.png";

function Favorites() {
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  const allEpisodes = useSelector<IState, IEpisode[]>(state => state.episodesGlobalState.allEpisodes);

  const handleEpisodeToFavoritesList = useCallback((episodeId: string) => {
    dispatch(addEpisodeToFavoritesList(episodeId));
  }, [dispatch]);

  const handleEpisodeToWatched = useCallback((episodeId: string) => {
    dispatch(addEpisodeToWatchedList(episodeId));
  }, [dispatch]);

  return (
    <MainWrapper>
      <Container>
        {allEpisodes.filter(favoriteEpisode => favoriteEpisode.favorite === true).length > 0
          ? <Content>
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
                onClickFavorite={() => {
                  handleEpisodeToFavoritesList(episode.id)
                }}
                onClickWatched={() => {
                  handleEpisodeToWatched(episode.id)
                }}
                favoriteActive={episode.favorite}
                watchedActive={episode.watched}
                episode={episode}
              />
            ))}
          </Content> : <EmptyMessageWrapper><span>{t('favorites_empty')}</span></EmptyMessageWrapper>}
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

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'header'])
  }
})

export default Favorites;