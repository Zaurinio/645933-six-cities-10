import { createAction } from '@reduxjs/toolkit';
// import { Comments } from '../types/places';
import { AppRoute } from '../const';

// export const selectCity = createAction('main/selectCity', (city) => ({
//   payload: city
// }));

// export const setPlaces = createAction<Places>('main/uploadPlaces');
// export const setPlaceById = createAction<Place>('main/uploadPlaceById');
// export const setNearestPlaces = createAction<Places>('main/uploadNearestPlaces');
// export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
// export const setMainPageReadyStatus = createAction<boolean>('data/setMainPageReadyStatus');
// export const setSortType = createAction<string>('data/setSortType');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

// export const setComments = createAction<Comments>('main/uploadComments');
// export const postComment = createAction<Comments>('main/postComment');

export const setError = createAction<string | null>('data/setError');
export const clearError = createAction('data/clearError');
