import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useQuery, gql } from '@apollo/client';
import { InputSearch } from '../../components/InputSearch';

import useDebounce from '../../hooks/Debounce';
import { EpisodeInfoCard } from '../EpisodeInfoCard';

import { useTranslation } from 'next-i18next';

import {
  Container,
  TitleContent,
  TitleAndSubtitle,
  Subtitle,
  Text,
  Portal,
  RickAndMortyImageContainer,
  ContentEpisodeCards,
  LoadingImage,
  Title
} from './styles';
import { useTheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { EpisodesData } from '../../pages/all-episodes';
import { addEpisodeToFavoritesList, addEpisodeToWatchedList, loadFilteredEpisodes } from '../../store/modules/episodes-rick-and-morty/actions';
import { IState } from '../../store';
import { IEpisode } from '../../store/modules/episodes-rick-and-morty/types';

const rickAndMortyImage = "/images/rick-and-morty-home.png";
const rickAndMortyTitle = "/images/rick-and-morty-title.png";
const ImageTitle = "/images/rick-and-morty-title.png";

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

const RickAndMortyLoading = "/images/rick-and-morty-loading.gif";

export function HomeContent() {
  const [episodeName, setEpisodeName] = useState<string>('');
  const debouncedValue = useDebounce<string>(episodeName, 500);
  const theme = useTheme();
  const { t } = useTranslation('common');

  const dispatch = useDispatch();
  const allEpisodes = useSelector<IState, IEpisode[]>(state => state.episodesGlobalState.allEpisodes);

  const { data, loading } = useQuery<EpisodesData>(GET_FILTERED_EPISODE, {
    variables: { debouncedValue }
  });

  const handleSearchEpisode = (event: ChangeEvent<HTMLInputElement>) => {
    setEpisodeName(event.target.value);
  };

  const handleEpisodeToFavorites = useCallback((episodeId: string) => {
    dispatch(addEpisodeToFavoritesList(episodeId));
  }, [dispatch]);

  const handleEpisodeToWatched = useCallback((episodeId: string) => {
    dispatch(addEpisodeToWatchedList(episodeId));
  }, [dispatch]);

  useEffect(() => {
    function loadEpisodes() {
      if (data) {
        dispatch(loadFilteredEpisodes(data.episodes.results))
      }
    }
    loadEpisodes();
  }, [data]);

  return (
    <Container>
      <InputSearch
        inputID="search"
        inputName="search"
        inputType="text"
        placeholder={t('input_placeholder')}
        onChange={handleSearchEpisode}
      />
      {debouncedValue
        ? (loading
          ? <div
            style={{
              width: "65%",
              height: "75%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <LoadingImage>
              <Image
                src={RickAndMortyLoading}
                alt='Rick And Morty Loading'
                width={180}
                height={180}
              />
            </LoadingImage>
          </div> : (data ? <>
            <ContentEpisodeCards>
              {allEpisodes.filter(episode => {
                if (debouncedValue === '') {
                  return episode
                } else if (episode.name.toLowerCase().includes(debouncedValue.toLowerCase())) {
                  return episode
                }
              }).map((episode) => (
                <EpisodeInfoCard
                  key={`episodeInforCard${episode.id}`}
                  episodeNumber={Number(episode.id) < 10 ? `0${String(episode.id)}` : String(episode.id)}
                  title={episode.name}
                  date={episode.air_date}
                  charactersNumber={String(episode.characters.length)}
                  episode={episode}
                  onClickFavorite={() => {
                    handleEpisodeToFavorites(episode.id)
                  }}
                  onClickWatched={() => {
                    handleEpisodeToWatched(episode.id)
                  }}
                  favoriteActive={episode.favorite}
                  watchedActive={episode.watched}
                />
              ))}
            </ContentEpisodeCards>
            <Title>
              <Image
                src={ImageTitle}
                alt="Rick And Morty"
                width={418}
                height={137}
              />
            </Title>
          </> :
            <div
              style={{
                width: "65%",
                height: "75%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
              }}
            >
              <h1 style={{
                fontSize: "2.5rem",
                color: `${theme.colors.highlight}`,
                fontWeight: "normal"
              }}>{t('data_not_found')}</h1>
            </div>))
        :
        <>
          <TitleContent>
            <TitleAndSubtitle>
              <Image
                src={rickAndMortyTitle}
                alt='Title'
                width={418}
                height={137}
              />
              <Subtitle>{t('title')}</Subtitle>
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
          <Text>{t('paragraph')}</Text>
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