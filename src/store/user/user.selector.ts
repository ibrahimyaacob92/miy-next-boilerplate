import { RootState } from 'store';

export const selectUserPreference = (state: RootState) => {
  return state.user.preference;
};
