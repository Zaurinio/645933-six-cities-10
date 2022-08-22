import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, Cities, SortType } from '../../const';
import { PlacesData } from '../../types/state';
import { fetchPlaceAction, fetchPlaceByIdAction, fetchNearestPlaceAction, fetchFavoriteAction, changeFavoriteStatusAction } from '../api-actions';


const initialState: PlacesData = {
  city: Cities.Paris,
  places: [],
  placeById: {},
  nearestPlaces: [],
  isDataLoaded: false,
  isMainPageReady: false,
  sortType: SortType.default,
  favorites: [],
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
      })
      .addCase(fetchFavoriteAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        state.places = state.places.map((place) =>
          place.id === action.payload.id ? action.payload : place
        );

        state.nearestPlaces = state.nearestPlaces.map((place) =>
          place.id === action.payload.id ? action.payload : place
        );

        if (state.placeById.id === action.payload.id) {
          state.placeById = action.payload;
        }
      });
  }
});


export const { changeCity, changeSorting } = placesData.actions;
