import { NameSpace, Cities } from '../../const';
import { State } from '../../types/state';
import { Places, Place } from '../../types/places';

export const getCity = (state: State): Cities => state[NameSpace.Places].city;
export const getPlaces = (state: State): Places => state[NameSpace.Places].places;
export const getPlaceById = (state: State): Place | Record<string, never> => state[NameSpace.Places].placeById;
export const getNearestPlaces = (state: State): Places => state[NameSpace.Places].nearestPlaces;
export const getMainPageReadyStatus = (state: State): boolean => state[NameSpace.Places].isMainPageReady;
export const getSortType = (state: State): string => state[NameSpace.Places].sortType;
export const getFavorites = (state: State): Places => state[NameSpace.Places].favorites;
