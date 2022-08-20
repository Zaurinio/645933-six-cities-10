export const URL_MARKER_DEFAULT = '../../img/pin.svg';
export const URL_MARKER_CURRENT = '../../img/pin-active.svg';
export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/room/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum APIRoute {
  Places = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum PlaceType {
  cities = 'cities',
  nearPlaces = 'near-places',
}

export enum SortType {
  default = 'default',
  priceLowToHigh = 'price-low-to-high',
  priceHighToLow = 'price-high-to-low',
  rating = 'rating',
}

export enum NameSpace {
  Places = 'PLACES',
  Comments = 'COMMENTS',
  Favorites = 'FAVORITES',
  User = 'USER',
}
