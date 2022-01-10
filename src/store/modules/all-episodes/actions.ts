import { IEpisode } from "./types";

export function addEpisodeToFavoritesList(episode: IEpisode) {
  return {
    type: 'ADD_EPISODE_TO_FAVORITES_LIST',
    payload: {
      episode
    }
  }
}