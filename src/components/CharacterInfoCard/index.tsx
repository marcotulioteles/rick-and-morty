import React from 'react';
import { Characters } from '../../pages/all-episodes';
import Image from 'next/image';

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
      <CharacterImage>
        <Image
          src={image || ''}
          alt={name}
          width={72}
          height={72}
        />
      </CharacterImage>
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