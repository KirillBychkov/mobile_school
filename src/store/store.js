// @flow

import * as React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  NavigationContainer,
} from '@react-navigation/native';

import { Navigator } from '../navigation';

export const Store = (): React.Node => (
  <SafeAreaProvider>
    <NavigationContainer
      onStateChange={state => {
        console.log('Moved to screen', state);
      }}
    >
      <Navigator />
    </NavigationContainer>
  </SafeAreaProvider >

);

// import { connect, Provider } from 'react-redux';
// import AsyncStorage from '@react-native-community/async-storage';
// import { persistStore, persistReducer } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';

// import { MenuProvider } from 'react-native-popup-menu';


// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import createSagaMiddleware from 'redux-saga';
// import {
// 	createReactNavigationReduxMiddleware,
// 	createNavigationReducer,
// 	createReduxContainer,
// } from 'react-navigation-redux-helpers';

// // eslint-disable-next-line import/no-extraneous-dependencies
// // import { createLogger } from 'redux-logger';

// import sagas from './sagas';

// import {
//   AuthReducer,
// } from './reducers';

// export type IPayloadAction = {
//   type: string,
//   payload: Object,
// };

// export type IAction = {
//   type: string,
// };

// export type IStore = {
//   auth: {
//     login: Object,
//     registration: Object,
//   },
//   state: {
//     loading: {
//       app: boolean,
//     },
//     modal: {
//       app: boolean,
//     },
//   },

// };

// // REDUCERS

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['auth'],
//   blackList: ['form'],
// };

// const rootReducer: Object = combineReducers({
//   // nav: createNavigationReducer(Navigator),
//   form: formReducer,
//   auth: AuthReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const mapStateToProps = state => ({
// 	state: state.nav,
// });

// const Application = createReduxContainer(Navigator);

// const AppWithNavigationState = connect(mapStateToProps)(Application);

// // MIDDLEWARES

// // const loggerMiddleware: Function = createLogger();
// const sagaMiddleware = createSagaMiddleware();
// const navigationMiddleware = createReactNavigationReduxMiddleware(state => state.nav);

// // STORE

// export const configureStore = (preloadedState: Object): Function =>
//   createStore(
//     persistedReducer,
//     preloadedState,
//     applyMiddleware(sagaMiddleware),
//   );

// export const store: Object = configureStore();

// sagaMiddleware.run(sagas);

// const persistor = persistStore(store);


{/*   initial can be need
  
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> 
    <OverlayProvider> 
    <ScreenContainer> 
    <SafeAreaProvider>
    <NavigationContainer
      onStateChange={state => {
        console.log('Moved to screen', state);
      }}
    >
       <MenuProvider>
        <Navigator />
      </MenuProvider> 
    </NavigationContainer>
  </SafeAreaProvider>
   </ScreenContainer> 
  <ModalComponent /> 
   </OverlayProvider>
</PersistGate>
</Provider> */}