// @flow

import { call, put, takeEvery, select } from 'redux-saga/effects';
// import { CommonActions } from '@react-navigation/native';
import { getFormValues } from 'redux-form';
import Actions from 'redux-form/lib/actions';
import { setLoginData, actionTriggerSpinner } from '../actions';
import { Keyboard, Alert } from 'react-native';

import {
	ACTION_AUTH_LOGIN,
} from '../actions/auth';

// import { Requests } from '../../requests';
// import {} from '../../constants';
// import { } from '../../utils/validations';

function* sagaAuthLogin({ payload }) {
	Keyboard.dismiss();
	// const formValues = yield select(getFormValues());

	// const {  } = formValues;
	yield put(setLoginData(payload));
	try {
		yield put(actionTriggerSpinner({ app: true }));

		// const response = yield call(Requests., { values });

	} catch (e) {
		console.log('Err', e);
		yield put(actionTriggerSpinner({ app: false }));
	} finally {
		yield put(actionTriggerSpinner({ app: false }));
	}
}

export default function* auth() {
	yield takeEvery(ACTION_AUTH_LOGIN, sagaAuthLogin);
}
