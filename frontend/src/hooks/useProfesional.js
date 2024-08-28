
import { useDispatch, useSelector } from "react-redux";
import bookerApi from "../api/bookerApi";
import { setAppointments, setAvailablesAppointments, setProfesional, startProfesionales } from "../store/profesionales/profesionalesSlice";
import { onCloseDateModal } from "../store/ui/uiSlice";
import Swal from "sweetalert2";

export const useProfesional = () => {
    const { profesionales, profesional, appointmentsAvailables, appointmentList } = useSelector((state) => state.profesionales);
    const dispatch = useDispatch();

    const getProfesionales = async () => {
        const { data } = await bookerApi.get(`employees/business/2?page=0&size=4`);

        dispatch(startProfesionales(data));
    }

    const getProfesionalById = async (id) => {
        // console.log(`El id es: ${id}`);
        const { data } = await bookerApi.get(`employees/services?employee_id=${id}&business_id=2`);
        // console.log(data);
        dispatch(setProfesional(data))

    }

    const getAvailablesAppointments = async (profesionalId, serviceId, date) => {
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
                    await Swal.fire({
                        title: "Buen trabajo!",
                        text: "Turno creado exitosamente!",
                        icon: "success"
                    });
                    dispatch(onCloseDateModal())
                }

            } catch (error) {
                await Swal.fire({
                    text: "Ocurrio un error al crear el turno",
                    icon: "error"
                });
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
            await Swal.fire({
                text: "Turno cancelado exitosamente",
                icon: "success"
            });
            dispatch(getAppointments(data));
            return;
        } catch (error) {
            // alert('Ocurrio un error al cancelar el turno, volve a intentarlo')
            console.log(error.response?.data?.message);
        }
    }


    return {
        //*Methods
        getProfesionales,
        getProfesionalById,
        getAvailablesAppointments,
        makeAppointment,
        getAppointments,
        cancelAppointment,
        //*Properties
        profesionales,
        profesional,
        appointmentsAvailables,
        appointmentList
    }
}
