import React, { useCallback, useContext, useEffect, useState } from 'react';
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
} from './styles';
import { EpisodesContext } from '../../contexts/EpisodesContext';
import { addEpisodeToFavoritesList, loadEpisodesFetched } from '../../store/modules/episodes-rick-and-morty/actions';
import { IEpisode } from '../../store/modules/episodes-rick-and-morty/types';
import { IState } from '../../store';
import { uniqueArray } from '../../lib/utils';

export type Characters = {
  id: string;
  name: string;
  status: string;
  species: string;
  image?: string;
}

type EpisodesInfo = {
  count: number;
  pages: number;
  prev: number;
  next: number;
}

export type EpisodesResults = {
  id: string;
  name: string;
  air_date: string;
  favorite?: boolean;
  characters: Characters[];
}

interface Episodes {
  info: EpisodesInfo;
  results: EpisodesResults[]
}

export interface EpisodesData {
  episodes: Episodes
}

const RickAndMortyLoading = "/images/rick-and-morty-loading.gif";
const ImageTitle = "/images/rick-and-morty-title.png";

const GET_ALL_EPISODES = gql`
    query getEpisodes($fetchPage: Int){
      episodes(page: $fetchPage) {
        info {
          count
          pages
          prev
          next
        }
        results {
          id
          name
          air_date
          characters {
            id
            name
            status
            species
            image
          }
        }
      }
    }
  `;

export default function AllEpisodes() {
  const { setPage, page } = useContext(EpisodesContext);
  const [fetchPage, setFetchPage] = useState(1);
  const { data, loading, fetchMore } = useQuery<EpisodesData>(GET_ALL_EPISODES, {
    variables: { fetchPage }
  });
  // const [episodes, setEpisodes] = useState<EpisodesResults[]>([]);
  const dispatch = useDispatch();
  const episodesHome = useSelector<IState, IEpisode[]>(state => state.episodesGlobalState.allEpisodes);

  function handleFetchMoreEpisodes() {
    setFetchPage(fetchPage + 1);
  }

  const handleAddEpisodeToFavorites = useCallback((episodeId: string) => {
    dispatch(addEpisodeToFavoritesList(episodeId));
  }, [dispatch]);

  useEffect(() => {
    function loadEpisodes() {
      try {
        if (data) {
          dispatch(loadEpisodesFetched(data.episodes.results));
        }
      } catch (error) {
        console.error(error);
      }
    }
    loadEpisodes()
    console.log(episodesHome);
  }, [data]);

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
              width={256}
              height={256}
            />
          </LoadingImage>
        </div> :
        <Container>
          <Content>
            {data && episodesHome.map(episode => (
              <EpisodeInfoCard
                clickedEpisodeInfoCard={episode}
                key={`episodesHomeId${episode.id}`}
                episodeNumber={Number(episode.id) < 10 ? `0${String(episode.id)}` : String(episode.id)}
                title={episode.name}
                date={episode.air_date}
                charactersNumber={String(episode.characters.length)}
                episodeID={episode.id}
                active={episode.favorite}
                onClick={() => {
                  handleAddEpisodeToFavorites(episode.id)
                }}
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
      {data?.episodes.info.next &&
        <LoadMoreButton
          onClick={() => {
            handleFetchMoreEpisodes()
            fetchMore({
              variables: { fetchPage }
            })
            setPage(fetchPage + 1);
          }}
        >
          Load More
        </LoadMoreButton>}
    </MainWrapper>
  )
}