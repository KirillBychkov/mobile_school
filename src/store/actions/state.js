// @flow

import { change } from 'redux-form';

import type { IPayloadAction } from '../store';

export const ACTION_STATE_TRIGGER_SPINNER: string = 'action/ACTION_STATE_TRIGGER_SPINNER';

export const ACTION_STATE_TRIGGER_MODAL: string = 'action/ACTION_STATE_TRIGGER_MODAL';

export const actionTriggerSpinner: Function = (payload: Object): IPayloadAction => ({
	type: ACTION_STATE_TRIGGER_SPINNER,
	payload,
});

export const actionTriggerModal: Function = (payload: Object): IPayloadAction => ({
	type: ACTION_STATE_TRIGGER_MODAL,
	payload,
});

export const changeFormValue: Function = ({ form, field, value }: Object): IPayloadAction => change(form, field, value);
