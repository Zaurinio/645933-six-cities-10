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
  Login = '/login',
  Logout = '/logout',
}

