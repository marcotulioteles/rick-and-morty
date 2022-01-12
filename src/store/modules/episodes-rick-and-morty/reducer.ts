import { Reducer } from "redux";
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

      const index = state.allEpisodes.findIndex(item => item.id === episodeId);

      const restArray = state.allEpisodes.filter(item => item.id !== episodeId);

      return {
        ...state,
        allEpisodes: [
          ...state.allEpisodes,
          {
            ...state.allEpisodes[index],
            favorite: true
          }
        ],
        favorites: [
          ...state.favorites,
          {
            ...state.allEpisodes[index],
            favorite: true
          }
        ]
      };
    }
    case 'ADD_EPISODES_FETCHED_TO_ARRAY': {
      const { episodes } = action.payload;

      return {
        ...state,
        allEpisodes: [
          ...state.allEpisodes,
          ...episodes
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