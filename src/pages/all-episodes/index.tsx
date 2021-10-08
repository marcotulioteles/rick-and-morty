import React, { useEffect, useState, lazy } from 'react'
import { EpisodeInfoCard } from '../../components/EpisodeInfoCard'
import { MainWrapper } from '../../components/MainWrapper'
import api from '../../services/api';

import {
  Container,
  Content,
  Title
} from './styles'

type EpisodesInfo = {
  count: number;
  pages: number;
  next: string;
  prev: number;
}

interface EpisodesData {
  id: number;
  name: string;
  air_date: string;
  characters: string[];
  url: string;
  created: string;
}

interface EpisodesResponse {
  info: EpisodesInfo;
  results: EpisodesData[];
}

export default function AllEpisodes() {
  const [episodes, setEpisodes] = useState<EpisodesData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadEpisodes() {
      try {
        const response = await api.get<EpisodesResponse>('/episode');
        const data = response.data.results;
        setEpisodes(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadEpisodes();
  }, [])

  return (
    <MainWrapper>
      {isLoading ?
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
            {episodes.map(episode => (
              <EpisodeInfoCard
                key={episode.id}
                episodeNumber={episode.id < 10 ? `0${String(episode.id)}` : String(episode.id)}
                title={episode.name}
                date={episode.air_date}
                charactersNumber={String(episode.characters.length)}
              />
            ))}
          </Content>
        </Container>
      }
      <Title src="/images/rick-and-morty-title.png" alt="Rick And Morty" />
    </MainWrapper>
  )
}