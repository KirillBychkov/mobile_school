// @flow

import * as React from 'react';

import { connect, Provider } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  NavigationContainer,
} from '@react-navigation/native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';

import {
  AuthReducer,
} from './reducers';

import { Navigator } from '../navigation';

export type IPayloadAction = {
  type: string,
  payload: Object,
};

export type IAction = {
  type: string,
};

export type IStore = {
  auth: {
    login: Object,
    registration: Object,
  },
  state: {
    loading: {
      app: boolean,
    },
    modal: {
      app: boolean,
    },
  },

};

// // REDUCERS

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  blackList: ['form'],
};

const rootReducer: Object = combineReducers({
  form: formReducer,
  auth: AuthReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (preloadedState: Object): Function =>
  createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware),
  );

export const store: Object = configureStore();

sagaMiddleware.run(sagas);

const persistor = persistStore(store);

export const Store = (): React.Node => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider>
        <NavigationContainer
          onStateChange={state => {
            console.log('Moved to screen', state);
          }}
        >
          <Navigator />
        </NavigationContainer>
      </SafeAreaProvider >
    </PersistGate>
  </Provider>

);
