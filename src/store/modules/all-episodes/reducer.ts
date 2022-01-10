import { Reducer } from "redux";
import { IAllEpisodesState } from "./types";

const INITIAL_STATE: IAllEpisodesState = {
  episodes: []
}

const allEpisodes: Reducer<IAllEpisodesState> = (state, action) => {
  console.log(state, action)
  return INITIAL_STATE;
}

export default allEpisodes;