// @flow

import type { IPayloadAction } from '../store';
import { ACTION_STATE_TRIGGER_SPINNER, ACTION_STATE_TRIGGER_MODAL } from '../actions/state';

const defaultState = {
	loading: {
		app: false,
	},
	modal: {
		app: false,
	},
};

export const StateReducer = (store: Object = defaultState, action: IPayloadAction): Object => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_STATE_TRIGGER_SPINNER:
			return { ...store, loading: { ...store.loading, ...payload } };

		case ACTION_STATE_TRIGGER_MODAL:
			return { ...store, modal: { ...store.modal, ...payload } };

		default:
			return store;
	}
};
