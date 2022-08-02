import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../const';
import { places } from '../mocks/places';
import { selectCity } from './action';
import { uploadPlaces } from './action';

// const offersByCities: {
//   [propertyName: string]: object,
// };

// offersByCities = {};

// Object.keys(Cities).forEach((city) => {
//   offersByCities[city] = places;
// });

const initialState = {
  city: Cities.Paris,
  places: places
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(uploadPlaces, (state, action) => {
      state.places = action.payload;
    });
});


export { reducer };
