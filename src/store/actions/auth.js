import utils from '../../services/utils';
import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	UPDATE_USER_DATA,
	LOGOUT_START,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL
} from './actionTypes';

/* auth start */
const loginStart = () => {
	return {
		type: LOGIN_START
	};
};

const loginSuccess = user => {
	return {
		type: LOGIN_SUCCESS,
		user
	};
};

const loginFail = () => {
	return {
		type: LOGIN_FAIL
	};
};

const updateUserData = user => {
	return {
		type: UPDATE_USER_DATA,
		user
	};
};

const logoutStart = () => {
	return {
		type: LOGOUT_START
	};
};

const logoutSuccess = user => {
	return {
		type: LOGOUT_SUCCESS,
		user
	};
};

const logoutFail = () => {
	return {
		type: LOGOUT_FAIL
	};
};

export const login = userData => {
	return (dispatch, getState) => {
		dispatch(loginStart());

		//TODO imitation backend call
		setTimeout(() => {
			dispatch(loginSuccess({email: userData.email}));
			utils.setDataToStorage('RRTS_USER_DATA', {email: userData.email});
		}, 500);
	};
};

export const updateUser = user => {
	return (dispatch, getState) => {
		dispatch(updateUserData(user));
	};
};

export const logout = () => {
	return (dispatch, getState) => {
		dispatch(logoutStart());

		//TODO imitation backend call
		setTimeout(() => {
			utils.deleteDataFromStorage('RRTS_USER_DATA');
			dispatch(logoutSuccess({}));
		}, 200);
	};
};
/* auth end */