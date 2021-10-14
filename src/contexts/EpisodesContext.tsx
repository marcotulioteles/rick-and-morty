import { createContext, ReactNode, SetStateAction, useState } from 'react';
import { EpisodesResults } from '../pages/all-episodes';

interface EpisodesContextData {
  episodeID: string;
  setEpisodeID: React.Dispatch<SetStateAction<string>>;
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  clickedEpisode: EpisodesResults;
  setClickedEpisode: React.Dispatch<SetStateAction<EpisodesResults>>;
}

interface EpisodesProviderProps {
  children: ReactNode;
};

export const EpisodesContext = createContext<EpisodesContextData>({} as EpisodesContextData);

export function EpisodesProvider({ children }: EpisodesProviderProps) {
  const [episodeID, setEpisodeID] = useState('1');
  const [page, setPage] = useState(1);
  const [clickedEpisode, setClickedEpisode] = useState<EpisodesResults>({} as EpisodesResults);

  return (
    <EpisodesContext.Provider value={{ 
      episodeID, 
      setEpisodeID, 
      page, 
      setPage,
      clickedEpisode,
      setClickedEpisode
    }}>
      { children }
    </EpisodesContext.Provider>
  )
}