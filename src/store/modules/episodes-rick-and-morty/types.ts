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
  watched?: boolean;
  characters: ICharacter[]
}

export interface IEpisodesGlobalState {
  allEpisodes: IEpisode[]
  page: number;
  fetchPage: number,
  clickedEpisode: IEpisode
}