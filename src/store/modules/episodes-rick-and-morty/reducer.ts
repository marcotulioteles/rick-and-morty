import { Reducer } from "redux";
import { compareArrays, sortByAscendingCallback } from "../../../lib/utils";
import { IEpisodesGlobalState } from "./types";

const INITIAL_STATE: IEpisodesGlobalState = {
  favorites: [],
  allEpisodes: [],
  page: 1,
  fetchPage: 1
}

const episodesGlobalState: Reducer<IEpisodesGlobalState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_EPISODE_TO_FAVORITE_LIST': {
      const { episodeId } = action.payload;

      const episodeFound = state.allEpisodes.find(episode => episode.id === episodeId);

      const episodeUpdated = {
        ...episodeFound,
        favorite: !episodeFound?.favorite
      }

      const episodesArraySplitted = state.allEpisodes.filter(episode => episode.id !== episodeId);

      return {
        ...state,
        allEpisodes: [
          ...episodesArraySplitted,
          episodeUpdated
        ].sort(sortByAscendingCallback)
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
        ]
      }
    }
    case 'INCREASE_FETCH_PAGE_NUMBER': {
      return {
        ...state,
        fetchPage: state.fetchPage + 1
      }
    }
    default: {
      return state;
    }
  }
}

export default episodesGlobalState;