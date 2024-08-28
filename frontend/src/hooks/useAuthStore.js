/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import bookerApi from '../api/bookerApi';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/auth/authSlice';



export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ username, password }) => {
        dispatch(onChecking());
        try {
            const reqBody = { username, password, businessId: 2 }
            const { data } = await bookerApi.post('login', reqBody);
            //TODO: Revisar si va el id del usuario
            const resp = await bookerApi.get(`customer/user/${data.id}`)

            // Error de informacion
            if (data && resp.data) {
                delete resp.data.user;
                const user = { ...data, ...resp.data }
                const encriptData = btoa(JSON.stringify(user))
                localStorage.setItem('userData', encriptData);
                dispatch(onLogin(user));
            } else {
                dispatch(onLogout('Credenciales incorrectas'));
                dispatch(clearErrorMessage());
            }




        } catch (error) {
            // Error del servidor
            dispatch(onLogout('Credenciales incorrectas'));
            dispatch(clearErrorMessage());

        }
    }

    const startRegister = async ({ username, email, password, firstName, lastName, phone }) => {
        dispatch(onChecking());
        try {
            const reqBody = { email, password, username, firstName, lastName, phone, businessId: 2 };
            const { data } = await bookerApi.post('customer/register', reqBody);

            let user = { ...data.user };
            delete data.user;
            const userFinal = { ...user, ...data }

            const encriptData = btoa(JSON.stringify(userFinal))
            localStorage.setItem('userData', encriptData);
            dispatch(onLogin(userFinal));
            // dispatch(onLogin(data));

        } catch (error) {
            dispatch(onLogout(error.response.data?.msg || '--'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }


    const checkAuthToken = async () => {
        const userData = localStorage.getItem('userData');
        if (!userData) return dispatch(onLogout());

        try {
            // const { data } = await calendarApi.get('auth/renew');
            // localStorage.setItem('token', data.token );
            // localStorage.setItem('token-init-date', new Date().getTime() );

            // localStorage.setItem('userData', JSON.stringify(newUser));
            const decriptData = JSON.parse(atob(userData))
            dispatch(onLogin(decriptData));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }



    return {
        //* Propiedades
        errorMessage,
        status,
        user,

        //* Métodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,
    }

}