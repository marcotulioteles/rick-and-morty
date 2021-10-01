import React from 'react';
import { InputSearch } from '../../components/InputSearch'

import {
  Container,
  TitleContent,
  TitleAndSubtitle,
  Subtitle,
  Text,
  Portal,
  RickAndMorty
} from './styles';

export function HomeContent() {
  return (  
    <Container>
      <InputSearch 
        inputID="search"
        inputName="search"
        inputType="text"
        placeholder="search an episode"
      />
      <TitleContent>
        <TitleAndSubtitle>
          <img src="/images/rick-and-morty-title.png" alt="Title" />
          <Subtitle>guide episodes</Subtitle>
        </TitleAndSubtitle>
        <Portal src="/images/portal.png" alt="Portal"/>
      </TitleContent>
        <Text>
          Rick and Morty is an American adult animated science fiction sitcom 
          and it follows the misadventures of cynical mad scientist Rick Sanchez 
          and his good-hearted but fretful grandson Morty Smith, who split their 
          time between domestic life and interdimensional adventures.
        </Text>

        <RickAndMorty src="/images/rick-and-morty-home.png" alt="Rick and Morty"/>
    </Container>
  );
}