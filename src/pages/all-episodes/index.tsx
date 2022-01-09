import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import { EpisodeInfoCard } from '../../components/EpisodeInfoCard'
import { MainWrapper } from '../../components/MainWrapper'
import { useQuery, gql } from '@apollo/client'

import {
  Container,
  Content,
  Title,
  LoadMoreButton,
  LoadingImage
} from './styles'
import { EpisodesContext } from '../../contexts/EpisodesContext'

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
  const [episodes, setEpisodes] = useState<EpisodesResults[]>([]);

  function handleFetchMoreEpisodes() {
    setFetchPage(fetchPage + 1);
  }

  useEffect(() => {
    function loadEpisodes() {
      try {
        if (data) {
          const provisoryEpisodes1 = [...episodes, ...data.episodes.results].map(element => {
            const newElement = { ...element, favorite: false }
            return newElement
          });

          let favoriteEpisodes = localStorage.getItem("@rick-and-morty:favorites");

          let favoriteEpisodesParsed: EpisodesResults[]

          if (favoriteEpisodes) {
            favoriteEpisodesParsed = JSON.parse(favoriteEpisodes);
          } else {
            favoriteEpisodesParsed = []
          }

          const provisoryEpisodes2 = provisoryEpisodes1.map(element => {
            const index = favoriteEpisodesParsed.findIndex(value => value.id === element.id);
            if (index > 0) {
              return { ...element, favorite: true }
            } else {
              return element
            }
          }).filter(function (element) {
            return !this[JSON.stringify(element)] && (this[JSON.stringify(element)] = true);
          }, Object.create(null));

          // console.log(provisoryEpisodes2)
          setEpisodes(provisoryEpisodes2);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadEpisodes()
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
            {data && episodes.map((episode, index) => (
              <EpisodeInfoCard
                clickedEpisodeInfoCard={episode}
                key={episode.id}
                episodeNumber={Number(episode.id) < 10 ? `0${String(episode.id)}` : String(episode.id)}
                title={episode.name}
                date={episode.air_date}
                charactersNumber={String(episode.characters.length)}
                episodeID={episode.id}
                active={episode.favorite}
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