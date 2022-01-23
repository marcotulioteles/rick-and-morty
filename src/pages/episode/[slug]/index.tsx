import React from 'react'
import Image from 'next/image';
import { EpisodeInfoPage } from '../../../components/EpisodeInfoPage'
import { MainWrapper } from '../../../components/MainWrapper'

import {
  Title
} from '../../../styles/pages/episode'
import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      '/episode/some-slug',
      { params: { slug: 'another-slug' } }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'header'])
  }
})

export default EpisodeDetails;