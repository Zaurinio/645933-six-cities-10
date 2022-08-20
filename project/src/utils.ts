import { Place } from './types/places';

export const formatDateDisplayValue = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

export const formatDateAttribute = (date: string) =>
  new Date(date).toLocaleDateString('en-CA');


export const sortPlacesByPriceLowToHigh = (placeA: Place, placeB: Place) => (placeA.price - placeB.price);
export const sortPlacesByPriceHighToLow = (placeA: Place, placeB: Place) => (placeB.price - placeA.price);
export const sortPlacesByRating = (placeA: Place, placeB: Place) => (placeB.rating - placeA.rating);
