import { RootState } from 'store';

export const selectTodo = (state: RootState) => {
  return state.todo;
};
