import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Places } from '../types/places';
import { setPlaces, setAuthorizationStatus, setError, redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus, AppRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from './';
import { setMainPageReadyStatus } from './action';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchPlaceAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPlaces',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Places>(APIRoute.Places);

    dispatch(setPlaces(data));
    dispatch(setMainPageReadyStatus(true));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);
