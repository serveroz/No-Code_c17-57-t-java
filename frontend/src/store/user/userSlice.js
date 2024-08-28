import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        customer: {},

    },
    reducers: {
        setUser: (state, { payload }) => {
            state.customer = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;