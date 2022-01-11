import { IEpisode } from "../../store/modules/episodes-rick-and-morty/types";

export const uniqueArray = (array: IEpisode[]) => {
  let values = array;

  values = values.filter(function (item) {
    return !this[JSON.stringify(item)] && (this[JSON.stringify(item)] = true);
  }, Object.create(null));

  return values;
};

export const sortByAscendingCallback = (previousElement: IEpisode, nextElement: IEpisode) => {
  return Number(previousElement.id) < Number(nextElement.id) ? -1 : 1
}