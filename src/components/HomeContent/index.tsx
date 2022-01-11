import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { useQuery, gql } from '@apollo/client';
import { InputSearch } from '../../components/InputSearch';

import useDebounce from '../../hooks/Debounce';
import { EpisodeInfoCard } from '../EpisodeInfoCard';

import {
  Container,
  TitleContent,
  TitleAndSubtitle,
  Subtitle,
  Text,
  Portal,
  RickAndMortyImageContainer,
  ContentEpisodeCards
} from './styles';
import { EpisodesData } from '../../pages/episodes-rick-and-morty';
import { useTheme } from 'styled-components';
import { useStore } from 'react-redux';

const rickAndMortyImage = "/images/rick-and-morty-home.png";
const rickAndMortyTitle = "/images/rick-and-morty-title.png";

const GET_FILTERED_EPISODE = gql`
  query getFilteredEpisodes($debouncedValue: String) {
    episodes(filter: {
      name: $debouncedValue
    }) {
      info {
          count
          pages
          prev
          next
        }
      results {
        id
        name
        air_date
        characters {
          id
          name
          status
          species
          image
        }
      }
    }
  }
`;

export function HomeContent() {
  const [episodeName, setEpisodeName] = useState<string>('');
  const debouncedValue = useDebounce<string>(episodeName, 500);
  const theme = useTheme();
  const store = useStore();

  const { data } = useQuery<EpisodesData>(GET_FILTERED_EPISODE, {
    variables: { debouncedValue }
  });

  const handleSearchEpisode = (event: ChangeEvent<HTMLInputElement>) => {
    setEpisodeName(event.target.value);
  };

  return (
    <Container>
      <InputSearch
        inputID="search"
        inputName="search"
        inputType="text"
        placeholder="search an episode by name"
        onChange={handleSearchEpisode}
      />
      {debouncedValue ?
        (data ? <ContentEpisodeCards>
          {data.episodes.results.map((episode) => (
            <EpisodeInfoCard
              clickedEpisodeInfoCard={episode}
              key={episode.id}
              episodeNumber={Number(episode.id) < 10 ? `0${String(episode.id)}` : String(episode.id)}
              title={episode.name}
              date={episode.air_date}
              charactersNumber={String(episode.characters.length)}
              episodeID={episode.id}
              onClick={() => {}}
            />
          ))}
        </ContentEpisodeCards> :
          <div
            style={{
              width: "65%",
              height: "75%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <h1 style={{
              fontSize: "2.5rem",
              color: `${theme.colors.highlight}`,
              fontWeight: "normal"
            }}>Data Not Found!</h1>
          </div>) :
        <>
          <TitleContent>
            <TitleAndSubtitle>
              <Image
                src={rickAndMortyTitle}
                alt='Title'
                width={418}
                height={137}
              />
              <Subtitle>guide episodes</Subtitle>
            </TitleAndSubtitle>
            <Portal>
              <Image
                src="/images/portal.png"
                alt="Portal"
                width={225}
                height={225}
              />
            </Portal>
          </TitleContent>
          <Text>
            Rick and Morty is an American adult animated science fiction sitcom
            and it follows the misadventures of cynical mad scientist Rick Sanchez
            and his good-hearted but fretful grandson Morty Smith, who split their
            time between domestic life and interdimensional adventures.
          </Text>
          <RickAndMortyImageContainer>
            <Image
              alt='Rick and Morty Image'
              src={rickAndMortyImage}
              width={454}
              height={550}
            />
          </RickAndMortyImageContainer>
        </>
      }
    </Container>
  );
}