import { store } from '../store/index.js';
import { AuthorizationStatus, Cities } from '../const';
import { Places, Place, Comments } from '../types/places';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  error: string | null,
  userData: UserData | null;
};

export type PlacesData = {
  city: Cities,
  places: Places,
  placeById: Place | Record<string, never>,
  nearestPlaces: Places,
  isDataLoaded: boolean,
  isMainPageReady: boolean,
  sortType: string,
  favorites: Places,
}

export type CommentsData = {
  comments: Comments,
  areCommentsDwonloaded: boolean,
  isCommentFormSubmited: boolean,
}
