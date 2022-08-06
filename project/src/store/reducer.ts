import { createReducer } from '@reduxjs/toolkit';
import { Cities, AuthorizationStatus } from '../const';
// import { places } from '../mocks/places';
import { selectCity, uploadPlaces, requireAuthorization, setDataLoadedStatus, setError } from './action';
import { Places } from '../types/places';

type InitialState = {
  city: Cities,
  places: Places,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: string | null,
};

const initialState: InitialState = {
  city: Cities.Paris,
  places: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(uploadPlaces, (state, action) => {
      state.places = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});


export { reducer };
