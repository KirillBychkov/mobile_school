// @flow

import type { IPayloadAction } from '../store';
import {
	ACTION_AUTH_SET_LOGIN_DATA,
	ACTION_AUTH_SET_USER_DATA
} from '../actions';

const defaultState = {
	login: {
		isLogin: false
	},
	user: null,
	registration: {},
};

export const AuthReducer = (store: Object = defaultState, action: IPayloadAction): Object => {
	const { type, payload } = action;
	switch (type) {
		case ACTION_AUTH_SET_LOGIN_DATA:
			return { ...store, login: { ...store.login, ...payload } };
		case ACTION_AUTH_SET_USER_DATA:
			return { ...store, ...{ user: payload } };
		default:
			return store;
	}
};
