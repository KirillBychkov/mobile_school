// @flow

import type { IPayloadAction } from '../store';

export const ACTION_AUTH_LOGIN: string = 'action/ACTION_AUTH_LOGIN';
export const ACTION_AUTH_SET_LOGIN_DATA: string = 'action/ACTION_AUTH_SET_LOGIN_DATA';
// STARTS

export const actionLogin: Function = (payload: Object): IPayloadAction => ({
	type: ACTION_AUTH_LOGIN,
	payload,
});

export const setLoginData: Function = (payload: Object): IPayloadAction => ({
	type: ACTION_AUTH_SET_LOGIN_DATA,
	payload,
});

