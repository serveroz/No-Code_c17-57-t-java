import { createSlice } from '@reduxjs/toolkit';

export const serviciosSlice = createSlice({
    name: 'servicios',
    initialState: {
        servicios: [],
        servicioPage: [],
        servicioProfesional: [], 
        appointmentsAvailables: undefined,
        appointmentList: [],
    },
    reducers: {
        startServicios: (state, { payload }) => {
            state.servicios = payload;
        },
        startServiciosPaginado: (state, { payload }) => {
            state.servicioPage = payload;
        },
        startServicioxProfesionales: (state, { payload }) => {
            state.servicioProfesional = payload; 
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
export const { startServicios, startServiciosPaginado, startServicioxProfesionales, setAvailablesAppointments, setAppointments } = serviciosSlice.actions;
