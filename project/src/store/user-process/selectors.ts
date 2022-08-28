import { NameSpace, AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { UserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserData = (state: State): UserData | null => state[NameSpace.User].userData;
export const setError = (state: State): string | null => state[NameSpace.User].error;
