import { Reducer } from "redux";
import { sortByAscendingCallback, uniqueArray } from "../../../lib/utils";
import { IEpisodesGlobalState } from "./types";

const INITIAL_STATE: IEpisodesGlobalState = {
  favorites: [],
  allEpisodes: []
}

const episodesGlobalState: Reducer<IEpisodesGlobalState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_EPISODE_TO_FAVORITE_LIST': {
      const { episodeId } = action.payload;

      const objectIndex = state.allEpisodes.findIndex(item => item.id === episodeId);

      let objectToUpdate = {
        ...state.allEpisodes[objectIndex],
        favorite: true
      };

      const episodesArraySplitted = state.allEpisodes.filter(item => item.id !== episodeId);

      const newAllEpisodesArray = [
        ...episodesArraySplitted,
        objectToUpdate
      ]

      const newFavoritesArray = newAllEpisodesArray.filter(item => item.favorite === true);

      return {
        ...state,
        allEpisodes: newAllEpisodesArray.sort(sortByAscendingCallback),
        favorites: [
          ...state.favorites,
          ...newFavoritesArray
        ]
      };
    }
    case 'ADD_EPISODES_FETCHED_TO_ARRAY': {
      const { episodes } = action.payload;

      const newIncomingArray = [
        ...state.allEpisodes,
        ...episodes
      ];

      const newEpisodesWithUniqueObjects = uniqueArray(newIncomingArray);

      return {
        ...state,
        allEpisodes: newEpisodesWithUniqueObjects
      }
    }
    default: {
      return state;
    }
  }
}

export default episodesGlobalState;