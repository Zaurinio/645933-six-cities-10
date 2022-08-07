import { createAction } from '@reduxjs/toolkit';
import { Places } from '../types/places';
import { AuthorizationStatus } from '../const';

export const selectCity = createAction('main/selectCity', (city) => ({
  payload: city
}));

export const setPlaces = createAction<Places>('main/uploadPlaces');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('game/setError');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setMainPageReadyStatus = createAction<boolean>('data/setMainPageReadyStatus');

