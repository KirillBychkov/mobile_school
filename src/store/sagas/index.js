// @flow

import { all, takeEvery } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/src/constants';
// import { NavigationActions } from 'react-navigation';

import state from './state';
import auth from './auth';
// import { ROUTE_AUTHORIZATION, ROUTE_APPLICATION_ACCOUNTS_DASHBOARD } from '../../constants';

// $FlowFixMe
export default function* rootSaga() {
	yield takeEvery(REHYDRATE, function* boot() {
		// const { routes } = yield select(s => s.nav);
		// const currentRoteBlock = routes[routes.length - 1];
		// const currentRouteBlockName = currentRoteBlock.routeName;

		// if (currentRouteBlockName !== ROUTE_AUTHORIZATION) {
		// 	yield put(NavigationActions.navigate({ routeName: ROUTE_APPLICATION_ACCOUNTS_DASHBOARD }));
		// }

		yield all([state(), auth()]);
	});
}
