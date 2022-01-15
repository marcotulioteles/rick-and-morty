import { createContext, ReactNode, SetStateAction, useState } from 'react';
import { IEpisode } from '../store/modules/episodes-rick-and-morty/types';

interface EpisodesContextData {
  episodeID: string;
  setEpisodeID: React.Dispatch<SetStateAction<string>>;
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  clickedEpisode: IEpisode;
  setClickedEpisode: React.Dispatch<SetStateAction<IEpisode>>;
}

interface EpisodesProviderProps {
  children: ReactNode;
};

export const EpisodesContext = createContext<EpisodesContextData>({} as EpisodesContextData);

export function EpisodesProvider({ children }: EpisodesProviderProps) {
  const [episodeID, setEpisodeID] = useState('1');
  const [page, setPage] = useState(1);
  const [clickedEpisode, setClickedEpisode] = useState<IEpisode>({} as IEpisode);

  return (
    <EpisodesContext.Provider value={{
      episodeID,
      setEpisodeID,
      page,
      setPage,
      clickedEpisode,
      setClickedEpisode
    }}>
      {children}
    </EpisodesContext.Provider>
  )
}