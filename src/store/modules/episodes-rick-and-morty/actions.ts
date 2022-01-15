import { IEpisode } from "./types";

export function addEpisodeToFavoritesList(episodeId: string) {
  return {
    type: 'ADD_EPISODE_TO_FAVORITE_LIST',
    payload: {
      episodeId,
    }
  }
}

export function addEpisodeToWatchedList(episodeId: string) {
  return {
    type: 'ADD_EPISODE_TO_WATCHED_LIST',
    payload: {
      episodeId,
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

export function loadFilteredEpisodes(episodes: IEpisode[]) {
  return {
    type: 'ADD_FILTERED_EPISODES_TO_ARRAY',
    payload: {
      episodes
    }
  }
}

export function setFetchPage() {
  return {
    type: 'INCREASE_FETCH_PAGE_NUMBER'
  }
}

export function setClickedEpisode(episode: IEpisode) {
  return {
    type: 'CLICKED_EPISODE',
    payload: {
      episode
    }
  }
}