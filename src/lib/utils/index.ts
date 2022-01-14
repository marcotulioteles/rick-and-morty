import { IEpisode } from "../../store/modules/episodes-rick-and-morty/types";

export const uniqueArray = (array: IEpisode[]) => {
  let values = array;

  values = values.filter(function (item) {
    return !this[JSON.stringify(item)] && (this[JSON.stringify(item)] = true);
  }, Object.create(null));

  return values;
};

export const sortByAscendingCallback = (previousElement: any, nextElement: any) => {
  return Number(previousElement.id) < Number(nextElement.id) ? -1 : 1
}

export const compareArrays = (arrayState: IEpisode[], arrayReceived: IEpisode[] | any) => {
  let arrayResult = [];

  for (let i = 0; i < arrayReceived.length; i++) {
    const obj = arrayReceived[i];

    const objectAlreadyExists = arrayState.some(episode => episode.id === obj.id);

    if (!objectAlreadyExists) {
      arrayResult.push(obj);
    }
  }

  return arrayResult;
}