import React from 'react';
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

interface EpisodeInfoCardProps {
  title: string;
  date: string;
  charactersNumber: string;
  episodeNumber: string;
}

export function EpisodeInfoCard({ title, date, charactersNumber, episodeNumber }: EpisodeInfoCardProps) {
  return (
    <Container>
      <Link href="/" passHref>
        <InfoContent>
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