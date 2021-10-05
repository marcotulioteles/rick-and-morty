import React from 'react'
import { EpisodeInfoPage } from '../../components/EpisodeInfoPage'
import { MainWrapper } from '../../components/MainWrapper'

import {
  Title
} from './styles'

export default function Favorites() {
  return (
    <MainWrapper>
      <EpisodeInfoPage />
      <Title src="/images/rick-and-morty-title.png" alt="Rick And Morty" />
    </MainWrapper>
  )
}