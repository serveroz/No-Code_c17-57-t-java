import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { profesionalesSlice } from './profesionales/profesionalesSlice'
import { serviciosSlice } from './serivicios/serviciosSlice'
import { uiSlice } from './ui/uiSlice'
import { userSlice } from './user/userSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
        profesionales: profesionalesSlice.reducer,
        servicios: serviciosSlice.reducer,
        ui: uiSlice.reducer

    },
})