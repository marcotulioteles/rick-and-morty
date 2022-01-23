import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { EpisodeInfoPage } from '../../../components/EpisodeInfoPage'
import { MainWrapper } from '../../../components/MainWrapper'

import { Title } from '../../../styles/pages/episode'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import store from '../../../store';

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

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'header'])
  }
})

export const getStaticPaths: GetStaticPaths = async () => {
  const state = store.getState();

  const paths = state.episodesGlobalState.allEpisodes.map(episode => ({
    params: { slug: episode.name.toLowerCase().split(' ').join('-') }
  }))

  return {
    paths,
    fallback: true
  }
}

export default EpisodeDetails;