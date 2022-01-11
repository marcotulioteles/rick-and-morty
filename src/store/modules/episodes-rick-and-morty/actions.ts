import { IEpisode } from "./types";

export function addEpisodeToFavoritesList(episodeId: string) {
  return {
    type: 'ADD_EPISODE_TO_FAVORITE_LIST',
    payload: {
      episodeId
    }
  }
}

export function loadEpisodesFetched(episodes: IEpisode[]) {
  return {
    type: 'ADD_EPISODES_FETCHED_TO_ARRAY',
    payload: {
      episodes
    }
  }
}