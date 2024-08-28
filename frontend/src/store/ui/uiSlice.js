
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false,
        servicio: undefined,
        professional: undefined
    },
    reducers: {
        onOpenDateModal: (state, { payload }) => {
            state.professional = payload;
            state.servicio = payload;
            state.isDateModalOpen = true;
        },
        onCloseDateModal: (state) => {
            state.professional = undefined;
            state.servicio = undefined;
            state.isDateModalOpen = false;
        },

    }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;