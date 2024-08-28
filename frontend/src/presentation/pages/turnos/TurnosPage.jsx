/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useProfesional } from "../../../hooks/useProfesional";
import { CardTurno } from "../../components/card-turno/CardTurno";

export const TurnosPage = () => {
  const { getAppointments, appointmentList, cancelAppointment } =
    useProfesional();

  useEffect(() => {
    getAppointments();
  }, []);

  const onClickCancelAppointment = (appointment) => {
    cancelAppointment(appointment.id);
  };

  return (
    <>
      {appointmentList?.map((appointment, index) => (
        
        <CardTurno
          key={index}
          appointment={appointment}
          onClick={() => onClickCancelAppointment(appointment)}
        />
      ))}
    </>
  );
};

{
  /* <NavbarComponent /> */
}
