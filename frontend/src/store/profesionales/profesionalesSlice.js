import { createSlice } from '@reduxjs/toolkit';

export const profesionalesSlice = createSlice({
    name: 'profesionales',
    initialState: {
        profesionales: [],
        profesional: {},
        appointmentsAvailables: undefined,
        appointmentList: []
    },
    reducers: {
        startProfesionales: (state, { payload }) => {
            state.profesionales = payload;
        },
        setProfesional: (state, { payload }) => {
            state.profesional = payload;
        },
        setAvailablesAppointments: (state, { payload }) => {
            state.appointmentsAvailables = payload;
        },
        setAppointments: (state, { payload }) => {
            state.appointmentList = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startProfesionales, setProfesional, setAvailablesAppointments, setAppointments } = profesionalesSlice.actions;