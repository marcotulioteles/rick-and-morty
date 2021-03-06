import { Reducer } from "redux";
import { compareArrays, compareFilteredAndStateArrays, sortByAscendingCallback } from "../../../lib/utils";
import { IEpisode, IEpisodesGlobalState } from "./types";

const INITIAL_STATE: IEpisodesGlobalState = {
  allEpisodes: [],
  fetchPage: 1,
  clickedEpisode: {
    air_date: '',
    characters: [],
    id: '',
    name: '',
    favorite: false,
    watched: false,
  }
}

const episodesGlobalState: Reducer<IEpisodesGlobalState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_EPISODE_TO_FAVORITE_LIST': {
      const { episodeId } = action.payload;

      const episodeFound = state.allEpisodes.find(item => item.id === episodeId);

      const episodeUpdated = (episode: IEpisode | any) => {
        if (episode?.favorite) {
          return {
            ...episode,
            favorite: !episode?.favorite
          }
        } else {
          return {
            ...episode,
            favorite: true
          }
        }
      }

      const episodesArraySplitted = state.allEpisodes.filter(item => item.id !== episodeId);

      return {
        ...state,
        allEpisodes: [
          ...episodesArraySplitted,
          episodeUpdated(episodeFound)
        ].sort(sortByAscendingCallback),
      }
    }
    case 'ADD_EPISODE_TO_WATCHED_LIST': {
      const { episodeId } = action.payload;

      const episodeFound = state.allEpisodes.find(episode => episode.id === episodeId);

      const episodeUpdated = (episode: IEpisode | any) => {
        if (episode?.watched) {
          return {
            ...episode,
            watched: !episode?.watched
          }
        } else {
          return {
            ...episode,
            watched: true
          }
        }
      }

      const episodesArraySplitted = state.allEpisodes.filter(episode => episode.id !== episodeId);

      return {
        ...state,
        allEpisodes: [
          ...episodesArraySplitted,
          episodeUpdated(episodeFound)
        ].sort(sortByAscendingCallback),
      }
    }
    case 'ADD_EPISODES_FETCHED_TO_ARRAY': {
      const { episodes } = action.payload;

      const newEpisodes = compareArrays(state.allEpisodes, episodes);

      return {
        ...state,
        allEpisodes: [
          ...state.allEpisodes,
          ...newEpisodes
        ].sort(sortByAscendingCallback)
      }
    }
    case 'INCREASE_FETCH_PAGE_NUMBER': {
      const { totalEpisodes } = action.payload

      const fetchPageChecked = (totalEpisodes: number) => {
        if (state.allEpisodes.length >= totalEpisodes) {
          return 1
        } else {
          return state.fetchPage + 1
        }
      }

      return {
        ...state,
        fetchPage: fetchPageChecked(totalEpisodes)
      }
    }
    case 'ADD_FILTERED_EPISODES_TO_ARRAY': {
      const { episodes } = action.payload

      const filteredEpisodes = compareFilteredAndStateArrays(state.allEpisodes, episodes);

      const allEpisodesUpdated = compareArrays(state.allEpisodes, filteredEpisodes);

      return {
        ...state,
        allEpisodes: [
          ...state.allEpisodes,
          ...allEpisodesUpdated
        ]
      }
    }
    case 'CLICKED_EPISODE': {
      const { episode } = action.payload

      return {
        ...state,
        clickedEpisode: {
          ...episode
        }
      }
    }
    default: {
      return state;
    }
  }
}

export default episodesGlobalState;