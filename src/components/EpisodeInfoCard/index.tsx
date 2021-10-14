import React, { useContext, useState } from 'react';
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
  episodeID: string;
  clickedEpisodeInfoCard: EpisodesResults
  title: string;
  date: string;
  charactersNumber: string;
  episodeNumber: string;
  active?: boolean
}

export function EpisodeInfoCard({ 
  title, 
  date, 
  charactersNumber, 
  episodeNumber, 
  clickedEpisodeInfoCard, 
  episodeID,
  active
}: EpisodeInfoCardProps) {
  const { setClickedEpisode } = useContext(EpisodesContext);
  
  function handleClickedEpisode(episode: EpisodesResults) {
    setClickedEpisode(episode)
  }

  function handleSendToFavorites(episode: EpisodesResults) {
    const newObject = { ...episode, favorite: true }

    function getFavorites() {
      const favoriteEpisodes = localStorage.getItem("@rick-and-morty:favorites");

      if (favoriteEpisodes) {
        return JSON.parse(favoriteEpisodes);
      } else {
        return []
      }
    }

    const localStorageFavoriteEpisodes = getFavorites();
    
    let newFavoriteEpisodesArray = [ ...localStorageFavoriteEpisodes, newObject ];

    const newArrayFavoriteElements = newFavoriteEpisodesArray.filter(function (element) {
      return !this[JSON.stringify(element)] && (this[JSON.stringify(element)] = true);
    }, Object.create(null));

    localStorage.setItem('@rick-and-morty:favorites', JSON.stringify(newArrayFavoriteElements));
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
        <Button
          active={active}
          onClick={() => {
            handleSendToFavorites(clickedEpisodeInfoCard)
          }}
        >
          <FiStar /> favorite
        </Button>
        <Button active={false}><FiTv /> watched</Button>
      </ButtonsContainer>
    </Container>
  );
}