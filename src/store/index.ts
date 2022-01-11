import { createStore } from 'redux';
import { IEpisodesGlobalState } from './modules/episodes-rick-and-morty/types';
import rootReducer from './modules/rootReducer';

export interface IState {
  episodesGlobalState: IEpisodesGlobalState;
}

const store = createStore(rootReducer);

export default store;