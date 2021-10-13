import React, { useEffect, useState } from 'react'
import { EpisodeInfoCard } from '../../components/EpisodeInfoCard'
import { MainWrapper } from '../../components/MainWrapper'
import { useQuery, gql } from '@apollo/client'

import {
  Container,
  Content,
  Title,
  LoadMoreButton
} from './styles'

type Characters = {
  id: string;
  name: string;
  status: string;
  species: string;
}

type EpisodesInfo = {
  count: number;
  pages: number;
  prev: number;
  next: number;
}

type EpisodesResults = {
  id: string;
  name: string;
  air_date: string;
  characters: Characters[];
}

interface Episodes {
  info: EpisodesInfo;
  results: EpisodesResults[]
}

export interface EpisodesData {
  episodes: Episodes
}

const GET_ALL_EPISODES = gql`
    query getEpisodes($page: Int){
      episodes(page: $page) {
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
          }
        }
      }
    }
  `;

export default function AllEpisodes() {
  const [page, setPage] = useState(1);
  const { data, loading, fetchMore } = useQuery<EpisodesData>(GET_ALL_EPISODES, {
    variables: { page }
  });
  const [episodes, setEpisodes] = useState<EpisodesResults[]>([])

  function handleFetchMoreEpisodes() {
    setPage(page + 1);
  }

  useEffect(() => {
    if (data) {
      setEpisodes([...episodes, ...data.episodes.results])
    }
  }, [data]);

  { console.log(episodes) }

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
          <img
            src="/images/rick-and-morty-loading.gif"
            alt="rick-and-morty"
            style={{
              width: '256px',
              height: '256px',
              borderRadius: '128px'
            }}
          />
        </div> :
        <Container>
          <Content>
            {data && episodes.map(episode => (
              <EpisodeInfoCard
                key={episode.id}
                episodeNumber={Number(episode.id) < 10 ? `0${String(episode.id)}` : String(episode.id)}
                title={episode.name}
                date={episode.air_date}
                charactersNumber={String(episode.characters.length)}
              />
            ))}
          </Content>
        </Container>
      }
      <Title src="/images/rick-and-morty-title.png" alt="Rick And Morty" />
      {data?.episodes.info.next &&
        <LoadMoreButton
          onClick={() => {
            handleFetchMoreEpisodes()
            fetchMore({
              variables: { page }
            })
          }}
        >
          Load More
        </LoadMoreButton>}
    </MainWrapper>
  )
}