import React from 'react'
import Image from 'next/image';
// import { EpisodeInfoPage } from '../../components/EpisodeInfoPage'
import { MainWrapper } from '../../components/MainWrapper'

import {
  Title
} from './styles'

const TitleImage = "/images/rick-and-morty-title.png";

export default function Favorites() {
  return (
    <MainWrapper>
      {/* <EpisodeInfoPage /> */}
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