import React, { useContext } from 'react';
import { FiStar, FiTv } from 'react-icons/fi'
import Link from 'next/link'

import {
  Container,
  Title,
  InfoDate,
  CharactersNumber,
  ButtonsContainer,
  Button,
  InfoContent,
} from './styles'
import { EpisodesContext } from '../../contexts/EpisodesContext';
import { EpisodesResults } from '../../pages/all-episodes';

interface EpisodeInfoCardProps {
  clickedEpisodeInfoCard: EpisodesResults
  title: string;
  date: string;
  charactersNumber: string;
  episodeNumber: string;
}

export function EpisodeInfoCard({ title, date, charactersNumber, episodeNumber, clickedEpisodeInfoCard }: EpisodeInfoCardProps) {
  const { setClickedEpisode } = useContext(EpisodesContext);

  
  function handleClickedEpisode(episode: EpisodesResults) {
    setClickedEpisode(episode)
  }

  return (
    <Container>
      <Link href={`/episode/${title.toLowerCase().split(" ").join("-")}`} passHref>
        <InfoContent onClick={() => handleClickedEpisode(clickedEpisodeInfoCard)}>
          <Title>{`${episodeNumber} - ${title}`}</Title>
          <InfoDate>{`air date: ${date}`}</InfoDate>
          <CharactersNumber>{`${charactersNumber} characters in this episode`}</CharactersNumber>
        </InfoContent>
      </Link>
      <ButtonsContainer>
        <Button><FiStar /> favorito</Button>
        <Button><FiTv /> já assisti</Button>
      </ButtonsContainer>
    </Container>
  );
}