import React, { useContext } from 'react'
import Image from 'next/image';
import { EpisodeInfoPage } from '../../../components/EpisodeInfoPage'
import { MainWrapper } from '../../../components/MainWrapper'
import { EpisodesContext } from '../../../contexts/EpisodesContext';

import {
  Title
} from './styles'

const ImageTitle = "/images/rick-and-morty-title.png";

export default function EpisodeDetails() {
  const { episodeID } = useContext(EpisodesContext);

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