import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
	error: false,
	token: null,
	first_name: null,
	last_name: null,
	email: null,
};

const slice = createSlice({
	name: 'userToken',
	initialState,
	reducers: {
		// HAS ERROR
		hasError(state, action) {
			state.error = action.payload;
		},

		// SET USER
		setUser(state, action) {
			state.token = action.payload.token;
			state.first_name = action.payload.firstName;
			state.last_name = action.payload.lastName;
			state.email = action.payload.email;
		}
	}
});

// Reducer
export default slice.reducer;

// Actions
export const { setUser, resetUser } = slice.actions;

// ----------------------------------------------------------------------

export function authUser(user) {
	return async (dispatch) => {
		try {
			dispatch(slice.actions.setUser(user));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

// ----------------------------------------------------------------------

export function logoutUser() {
	return async (dispatch) => {
		try {
			dispatch(slice.actions.resetUser());
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}