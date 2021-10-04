import React from 'react'
import { EpisodeInfoCard } from '../../components/EpisodeInfoCard'
import { MainWrapper } from '../../components/MainWrapper'

import {
  Container,
  Content,
  Title
} from './styles'

export default function AllEpisodes() {
  return (
    <MainWrapper>
      <Container>
        <Content>
          <EpisodeInfoCard 
            episodeNumber="01"
            title="pilot"
            date="01/02/2015"
            charactersNumber="10"
          />
          <EpisodeInfoCard 
            episodeNumber="01"
            title="pilot"
            date="01/02/2015"
            charactersNumber="10"
          />
          <EpisodeInfoCard 
            episodeNumber="01"
            title="pilot"
            date="01/02/2015"
            charactersNumber="10"
          />
          <EpisodeInfoCard 
            episodeNumber="01"
            title="pilot"
            date="01/02/2015"
            charactersNumber="10"
          />
          <EpisodeInfoCard 
            episodeNumber="01"
            title="pilot"
            date="01/02/2015"
            charactersNumber="10"
          />
          <EpisodeInfoCard 
            episodeNumber="01"
            title="pilot"
            date="01/02/2015"
            charactersNumber="10"
          />
          <EpisodeInfoCard 
            episodeNumber="01"
            title="pilot"
            date="01/02/2015"
            charactersNumber="10"
          />
          <EpisodeInfoCard 
            episodeNumber="01"
            title="pilot"
            date="01/02/2015"
            charactersNumber="10"
          />
          <EpisodeInfoCard 
            episodeNumber="01"
            title="pilot"
            date="01/02/2015"
            charactersNumber="10"
          />
          <EpisodeInfoCard 
            episodeNumber="01"
            title="pilot"
            date="01/02/2015"
            charactersNumber="10"
          />
          <EpisodeInfoCard 
            episodeNumber="01"
            title="pilot"
            date="01/02/2015"
            charactersNumber="10"
          />
          <EpisodeInfoCard 
            episodeNumber="01"
            title="pilot"
            date="01/02/2015"
            charactersNumber="10"
          />
          <EpisodeInfoCard 
            episodeNumber="01"
            title="pilot"
            date="01/02/2015"
            charactersNumber="10"
          />
        </Content>
      </Container>
      <Title src="/images/rick-and-morty-title.png" alt="Rick And Morty" />
    </MainWrapper>
  )
}