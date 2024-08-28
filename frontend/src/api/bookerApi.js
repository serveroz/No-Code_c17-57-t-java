import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables()




const bookerApi = axios.create({
    baseURL: VITE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
    // baseURL: import.meta.env.VITE_API_URL ,
});

// Todo: configurar interceptores
// calendarApi.interceptors.request.use( config => {

//     config.headers = {
//         ...config.headers,
//         'x-token': localStorage.getItem('token')
//     }

//     return config;
// })


export default bookerApi;