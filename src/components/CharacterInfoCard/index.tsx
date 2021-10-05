import React from 'react';

import {
  Container,
  CharacterImage,
  CharacterName,
  CharacterInfoContent,
  CharacterInfoData,
  CharacterInfoLabel,
} from './styles'

export function CharacterInfoCard() {
  return (
    <Container>
      <CharacterImage src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick"/>
      <CharacterName>Rick Sanchez</CharacterName>
      <CharacterInfoContent>
        <CharacterInfoLabel>Specie:</CharacterInfoLabel>
        <CharacterInfoData>Human</CharacterInfoData>
      </CharacterInfoContent>
      <CharacterInfoContent>
        <CharacterInfoLabel>Status:</CharacterInfoLabel>
        <CharacterInfoData>Alive</CharacterInfoData>
      </CharacterInfoContent>
    </Container>
  );
}