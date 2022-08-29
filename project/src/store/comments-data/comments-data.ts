import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CommentsData } from '../../types/state';
import { fetchCommentAction, postCommentAction } from '../api-actions';

const initialState: CommentsData = {
  comments: [],
  areCommentsDwonloaded: false,
  isCommentFormSubmited: false,
};

export const commentsData = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentAction.pending, (state) => {
        state.areCommentsDwonloaded = false;
      })
      .addCase(fetchCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.areCommentsDwonloaded = true;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isCommentFormSubmited = true;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isCommentFormSubmited = false;
      });
  }
});
