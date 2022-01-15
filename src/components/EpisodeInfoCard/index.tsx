import React, { ReactNode, useContext, useState } from 'react';
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
  MessageOver,
  ButtonWrapper
} from './styles'
import { EpisodesContext } from '../../contexts/EpisodesContext';
import { IEpisode } from '../../store/modules/episodes-rick-and-morty/types';

interface LikeButtonProps {
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
  messageClicked: string;
  messageClickedOut: string;
  isClicked?: boolean
}

function LikeButton({
  active,
  onClick,
  children,
  messageClicked,
  messageClickedOut,
  isClicked
}: LikeButtonProps) {
  const [over, setOver] = useState(false);

  const handleMouseOver = () => {
    setTimeout(() => { setOver(true) }, 100)
  }

  const handleMouseOut = () => {
    setTimeout(() => { setOver(false) }, 100)
  }

  return (
    <ButtonWrapper>
      <Button
        active={active}
        onClick={onClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {children}
      </Button>
      {over && <MessageOver>{isClicked ? messageClicked : messageClickedOut}</MessageOver>}
    </ButtonWrapper>
  )
}

interface EpisodeInfoCardProps {
  title: string;
  date: string;
  charactersNumber: string;
  episodeNumber: string;
  favoriteActive?: boolean;
  watchedActive?: boolean;
  onClickFavorite: () => void;
  onClickWatched: () => void;
  episode: IEpisode
}

export function EpisodeInfoCard({
  title,
  date,
  charactersNumber,
  episodeNumber,
  favoriteActive,
  watchedActive,
  onClickFavorite,
  onClickWatched,
  episode
}: EpisodeInfoCardProps) {
  const { setClickedEpisode } = useContext(EpisodesContext);

  return (
    <Container>
      <Link href={`/episode/${title.toLowerCase().split(" ").join("-")}`} passHref>
        <InfoContent onClick={() => { setClickedEpisode(episode) }}>
          <Title>{`${episodeNumber} - ${title}`}</Title>
          <InfoDate>{`air date: ${date}`}</InfoDate>
          <CharactersNumber>{`${charactersNumber} characters in this episode`}</CharactersNumber>
        </InfoContent>
      </Link>
      <ButtonsContainer>
        <LikeButton
          active={favoriteActive}
          onClick={onClickFavorite}
          isClicked={favoriteActive}
          messageClicked='not favorite'
          messageClickedOut='favorite'
        >
          <FiStar />
        </LikeButton>
        <LikeButton
          active={watchedActive}
          onClick={onClickWatched}
          isClicked={watchedActive}
          messageClicked='not watched'
          messageClickedOut='watched'
        >
          <FiTv />
        </LikeButton>
      </ButtonsContainer>
    </Container>
  );
}