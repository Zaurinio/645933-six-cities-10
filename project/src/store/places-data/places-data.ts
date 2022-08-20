import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, Cities, SortType } from '../../const';
import { PlacesData } from '../../types/state';
import { fetchPlaceAction, fetchPlaceByIdAction, fetchNearestPlaceAction } from '../api-actions';


const initialState: PlacesData = {
  city: Cities.Paris,
  places: [],
  placeById: {},
  nearestPlaces: [],
  isDataLoaded: false,
  isMainPageReady: false,
  sortType: SortType.default,
};


export const placesData = createSlice({
  name: NameSpace.Places,
  initialState,
  reducers: {
    changeCity(state, action) {
      state.city = action.payload;
    },
    changeSorting(state, action: PayloadAction<SortType>) {
      state.sortType = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPlaceAction.pending, (state) => {
        state.isMainPageReady = false;
      })
      .addCase(fetchPlaceAction.fulfilled, (state, action) => {
        state.places = action.payload;
        state.isMainPageReady = true;
      })
      .addCase(fetchPlaceByIdAction.fulfilled, (state, action) => {
        state.placeById = action.payload;
      })
      .addCase(fetchNearestPlaceAction.fulfilled, (state, action) => {
        state.nearestPlaces = action.payload;
      });
  }
});


export const { changeCity, changeSorting } = placesData.actions;
