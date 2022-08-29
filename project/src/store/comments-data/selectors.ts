import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Comments } from '../../types/places';

export const getComments = (state: State): Comments => state[NameSpace.Comments].comments;
export const getLoadedCommentsStatus = (state: State): boolean => state[NameSpace.Comments].areCommentsDwonloaded;
export const getCommentFormSubmitStatus = (state: State): boolean => state[NameSpace.Comments].isCommentFormSubmited;
