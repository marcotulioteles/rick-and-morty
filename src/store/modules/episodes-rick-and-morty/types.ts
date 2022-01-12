export interface ICharacter {
  id: string,
  name: string,
  status: string,
  species: string,
  image?: string
}

export interface IEpisode {
  id: string,
  name: string,
  air_date: string,
  favorite?: boolean;
  characters: ICharacter[]
}

export interface IEpisodesGlobalState {
  favorites: IEpisode[];
  allEpisodes: IEpisode[]
  page: number;
  fetchPage: number
}