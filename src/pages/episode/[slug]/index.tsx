import React from 'react'
import Image from 'next/image';
import { EpisodeInfoPage } from '../../../components/EpisodeInfoPage'
import { MainWrapper } from '../../../components/MainWrapper'

import {
  Title
} from '../../../styles/pages/episode'

const ImageTitle = "/images/rick-and-morty-title.png";

function EpisodeDetails() {
  return (
    <MainWrapper>
      <EpisodeInfoPage />
      <Title>
        <Image
          src={ImageTitle}
          alt='Rick and Morty Title'
          width={418}
          height={137}
        />
      </Title>
    </MainWrapper>
  )
}

export default EpisodeDetails;