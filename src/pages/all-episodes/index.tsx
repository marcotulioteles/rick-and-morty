import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { EpisodeInfoCard } from '../../components/EpisodeInfoCard';
import { MainWrapper } from '../../components/MainWrapper';
import { useQuery, gql } from '@apollo/client';

import {
  Container,
  Content,
  Title,
  LoadMoreButton,
  LoadingImage
} from '../../styles/pages/all-episodes';
import { addEpisodeToFavoritesList, addEpisodeToWatchedList, loadEpisodesFetched, setFetchPage } from '../../store/modules/episodes-rick-and-morty/actions';
import { IEpisode } from '../../store/modules/episodes-rick-and-morty/types';
import { IState } from '../../store';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAllEpisodesQuery } from '../../../graphqlSchemas';

type EpisodesInfo = {
  count: number;
  pages: number;
  prev: number;
  next: number;
}

interface Episodes {
  info: EpisodesInfo;
  results: IEpisode[]
}

export interface EpisodesData {
  episodes: Episodes
}

const RickAndMortyLoading = "/images/rick-and-morty-loading.gif";
const ImageTitle = "/images/rick-and-morty-title.png";

const GET_ALL_EPISODES = gql`${getAllEpisodesQuery}`;

function AllEpisodes() {
  const episodesHome = useSelector<IState, IEpisode[]>(state => state.episodesGlobalState.allEpisodes);
  const fetchPage = useSelector<IState, number>(state => state.episodesGlobalState.fetchPage);

  const dispatch = useDispatch();

  const { data, loading, fetchMore } = useQuery<EpisodesData>(GET_ALL_EPISODES, {
    variables: { fetchPage }
  });

  const handleEpisodeToFavorites = useCallback((episodeId: string) => {
    dispatch(addEpisodeToFavoritesList(episodeId));
  }, [dispatch]);

  const handleEpisodeToWatched = useCallback((episodeId: string) => {
    dispatch(addEpisodeToWatchedList(episodeId));
  }, [dispatch]);

  const handleFetchData = () => {
    if (data) {
      dispatch(loadEpisodesFetched(data.episodes.results));
    }
  }

  useEffect(() => {
    function loadEpisodes() {
      if (data) {
        dispatch(loadEpisodesFetched(data.episodes.results))
      }
    }
    loadEpisodes();
  }, [data])

  return (
    <MainWrapper>
      {loading ?
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <LoadingImage>
            <Image
              src={RickAndMortyLoading}
              alt='Rick And Morty Loading'
              width={180}
              height={180}
            />
          </LoadingImage>
        </div> :
        <Container>
          <Content>
            {episodesHome.map(episode => (
              <EpisodeInfoCard
                key={`episodesHomeId${episode.id}`}
                episodeNumber={Number(episode.id) < 10 ? `0${String(episode.id)}` : String(episode.id)}
                title={episode.name}
                date={episode.air_date}
                charactersNumber={String(episode.characters.length)}
                onClickFavorite={() => {
                  handleEpisodeToFavorites(episode.id)
                }}
                onClickWatched={() => {
                  handleEpisodeToWatched(episode.id)
                }}
                favoriteActive={episode.favorite}
                watchedActive={episode.watched}
                episode={episode}
              />
            ))}
          </Content>
        </Container>
      }
      <Title>
        <Image
          src={ImageTitle}
          alt="Rick And Morty"
          width={418}
          height={137}
        />
      </Title>

      {data &&
        <LoadMoreButton
          onClick={() => {
            dispatch(setFetchPage(data.episodes.info.count))
            fetchMore({
              variables: { fetchPage }
            })
            handleFetchData()
          }}
        >
          + episodes...
        </LoadMoreButton>
      }
    </MainWrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'header'])
  }
})

export default AllEpisodes;