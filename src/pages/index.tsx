import type { NextPage } from 'next'
import { HomeContent } from '../components/HomeContent'
import { MainWrapper } from '../components/MainWrapper'

const Home: NextPage = () => {
  return (
    <MainWrapper>
      <HomeContent />
    </MainWrapper>
  )
}

export default Home
