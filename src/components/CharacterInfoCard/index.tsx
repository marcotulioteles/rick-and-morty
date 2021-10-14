import React from 'react';
import { Characters } from '../../pages/all-episodes';

import {
  Container,
  CharacterImage,
  CharacterName,
  CharacterInfoContent,
  CharacterInfoData,
  CharacterInfoLabel,
} from './styles'

export function CharacterInfoCard({ id, name, species, status, image }: Characters) {
  return (
    <Container key={id}>
      <CharacterImage src={image} alt={name}/>
      <CharacterName>{name}</CharacterName>
      <CharacterInfoContent>
        <CharacterInfoLabel>Specie:</CharacterInfoLabel>
        <CharacterInfoData>{species}</CharacterInfoData>
      </CharacterInfoContent>
      <CharacterInfoContent>
        <CharacterInfoLabel>Status:</CharacterInfoLabel>
        <CharacterInfoData>{status}</CharacterInfoData>
      </CharacterInfoContent>
    </Container>
  );
}