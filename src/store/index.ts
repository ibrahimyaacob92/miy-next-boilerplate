import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user.slice';
import createSagaMiddleware from '@redux-saga/core';
import { all } from 'redux-saga/effects';
import { createWrapper } from 'next-redux-wrapper';

export function* rootSaga() {
  yield all([
    // add saga here
  ]);
}

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const configuredStore = configureStore({
    reducer: { user: userReducer },
    middleware: [sagaMiddleware],
    devTools: true,
  });
  sagaMiddleware.run(rootSaga);
  return configuredStore;
};

export type RootState = ReturnType<AppStore['getState']>;
export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
