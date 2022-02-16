import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { all } from 'redux-saga/effects';
import { createWrapper } from 'next-redux-wrapper';
import userSaga from './user/user.saga';
import todoSaga from './todo/todo.saga';
import user from './user/user.slice';
import todo from './todo/todo.slice';

//TODO: Update this with Plop
export function* rootSaga() {
  yield all([
    // add saga here
    userSaga(),
    todoSaga(),
  ]);
}

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const configuredStore = configureStore({
    reducer: {
      // add reducers here
      user,
      todo,
    },
    middleware: [sagaMiddleware],
    devTools: true,
  });
  sagaMiddleware.run(rootSaga);
  return configuredStore;
};

export type RootState = ReturnType<AppStore['getState']>;
export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
