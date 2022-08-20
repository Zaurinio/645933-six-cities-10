import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { placesData } from './places-data/places-data';
import { commentsData } from './comments-data/comments-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Places]: placesData.reducer,
  [NameSpace.Comments]: commentsData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
