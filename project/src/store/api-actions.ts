import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Places, Place, Comments, PostingComment } from '../types/places';
import { redirectToRoute, setError } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

// import { setError } from '../store/user-process/user-process';

export const clearErrorAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/clearError',
  (_arg, { dispatch }) => {
    setTimeout(
      () => dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchPlaceAction = createAsyncThunk<Places, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPlaces',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Places>(APIRoute.Places);

    return data;
  },
);

export const fetchPlaceByIdAction = createAsyncThunk<Place, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPlaceById',
  async (placeId, { dispatch, extra: api }) => {
    const { data } = await api.get<Place>(`${APIRoute.Places}/${placeId}`);

    return data;
  },
);

export const fetchNearestPlaceAction = createAsyncThunk<Places, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearestPlaces',
  async (placeId, { dispatch, extra: api }) => {
    const { data } = await api.get<Places>(`${APIRoute.Places}/${placeId}/nearby`);

    return data;
  },
);

export const fetchFavoriteAction = createAsyncThunk<Places, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Places>(`${APIRoute.Favorite}`);

    return data;
  },
);

export const changeFavoriteStatusAction = createAsyncThunk<Place, { placeId: number, status: number }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changeFavoriteStatus',
  async ({ placeId, status }, { dispatch, extra: api }) => {
    const { data } = await api.post<Place>(`${APIRoute.Favorite}/${placeId}/${status}`);
    dispatch(fetchFavoriteAction());

    return data;
  },
);

export const postCommentAction = createAsyncThunk<Comments, { formData: PostingComment, placeId: number }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postComment',
  async ({ formData, placeId }, { dispatch, extra: api }) => {
    const { data } = await api.post<Comments>(`${APIRoute.Comments}/${placeId}`, formData);

    return data;
  },
);

export const fetchCommentAction = createAsyncThunk<Comments, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (placeId, { dispatch, extra: api }) => {
    const { data } = await api.get<Comments>(`${APIRoute.Comments}/${placeId}`);

    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));

    return data;
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
    // dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);


