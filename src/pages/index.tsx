import type { NextPage } from 'next'
import { GetStaticProps } from 'next';
import { HomeContent } from '../components/HomeContent'
import { MainWrapper } from '../components/MainWrapper'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  return (
    <MainWrapper>
      <HomeContent />
    </MainWrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'header'])
  }
})

export default Home
