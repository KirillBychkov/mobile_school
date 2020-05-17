// @flow

import type { IPayloadAction } from '../store';
import {
	ACTION_AUTH_SET_LOGIN_DATA,
} from '../actions';

const defaultState = {
	login: {
		isLogin: false
	},
	registration: {},
};

export const AuthReducer = (store: Object = defaultState, action: IPayloadAction): Object => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_AUTH_SET_LOGIN_DATA:
			return { ...store, login: { ...store.login, ...payload } };
		default:
			return store;
	}
};
