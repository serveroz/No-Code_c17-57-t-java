import { useDispatch, useSelector } from "react-redux";
import bookerApi from "../api/bookerApi";
import { startServicios, startServiciosPaginado, startServicioxProfesionales,  setAppointments, setAvailablesAppointments} from "../store/serivicios/serviciosSlice";
import { onCloseDateModal } from "../store/ui/uiSlice";

export const useServiceStore = () => {
    const { servicios, servicioPage, servicioProfesional, appointmentsAvailables, appointmentList  } = useSelector((state) => state.servicios);

    const dispatch = useDispatch();

    const getServicios = async () => {
        const { data } = await bookerApi.get(`services/business/2?page=0&size=10`);

        dispatch(startServicios(data));
    }

    const getServiciosPaginado = async () => {
        const { data } = await bookerApi.get(`services/business/2?page=0&size=4`);

        dispatch(startServiciosPaginado(data));
    }

    const getProfesionalesPorServicio = async (id) => {
        const { data } = await bookerApi.get(`services/${id}`);
        

        dispatch(startServicioxProfesionales(data));
    };


    const getAvailablesAppointmentsService = async (profesionalId, serviceId, date) => {
        const dateSelected = date.toISOString().slice(0, 10);

        const { data } = await bookerApi.get(`appointments/free_appointments/${profesionalId}/service/${serviceId}?date=${dateSelected}`);
        dispatch(setAvailablesAppointments(data))
    }

    const makeAppointment = async (profesionalId, serviceId, date, hour) => {
        const dateSelected = date.toISOString().slice(0, 10);

        const userData = JSON.parse(atob(localStorage.getItem('userData')));

        const reqBody = {
            customerId: userData.id, // Id del usuario que se ha logueado
            employeeId: profesionalId,
            serviceId: serviceId,
            datetime: `${dateSelected} ${hour}`
        };

        try {

            try {
                const { data } = await bookerApi.post(`appointments`, reqBody);

                if (data) {
                    await alert('Turno creado exitosamente');
                    dispatch(onCloseDateModal())
                }

            } catch (error) {
                alert('Ocurrio un error al crear el turno');
                console.log(error);
            }

        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    const getAppointments = async () => {
        const userData = JSON.parse(atob(localStorage.getItem('userData')));
        try {
            const { data } = await bookerApi.get(`appointments/customer/${userData.id}`);
            dispatch(setAppointments(data.filter((item) => !item.cancelled)));
        } catch (error) {
            dispatch(setAppointments([]));
            console.log(error.response.data.message);
        }
    }

    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await bookerApi.patchForm(`appointments/cancel/${appointmentId}`);
            await alert('Turno cancelado exitosamente')
            dispatch(getAppointments(data));
            return;
        } catch (error) {
            // alert('Ocurrio un error al cancelar el turno, volve a intentarlo')
            console.log(error.response?.data?.message);
        }
    }
    return {
        //* Properties
        servicios,
        servicioPage,
        servicioProfesional,
        appointmentsAvailables,
        appointmentList,
        //* Methods
        getServicios,
        getServiciosPaginado,
        getProfesionalesPorServicio,
        getAvailablesAppointmentsService,
        makeAppointment,
        getAppointments,
        cancelAppointment,
    }
}
