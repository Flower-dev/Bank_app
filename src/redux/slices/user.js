import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: '',
    infos: { 
        email: '', 
        firstName: '', 
        lastName: '', 
        id: '' 
    }
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setInfos: (state, action) => {
            state.infos = {
                ...state.infos,
                ...action.payload,
            };
        }
    },
});
// Actions
export const { setToken, setInfos } = slice.actions;
// Reducer
export default slice.reducer;