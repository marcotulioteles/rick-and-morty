import React, { useContext } from 'react'
import { EpisodeInfoPage } from '../../../components/EpisodeInfoPage'
import { MainWrapper } from '../../../components/MainWrapper'
import { EpisodesContext } from '../../../contexts/EpisodesContext';

import {
  Title
} from './styles'

export default function EpisodeDetails() {
  const { episodeID } = useContext(EpisodesContext);

  return (
    <MainWrapper>
      <EpisodeInfoPage />
      <Title src="/images/rick-and-morty-title.png" alt="Rick And Morty" />
    </MainWrapper>
  )
}