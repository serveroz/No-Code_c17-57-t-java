import { es } from "date-fns/locale/es";
import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import "sweetalert2/dist/sweetalert2.min.css";
import { useProfesional } from "../../../hooks/useProfesional";
import { useUiStore } from "../../../hooks/useUiStore";
import { ButtonFWComponent } from "../button-fw/ButtonFWComponent";
import "./BookingModal.css";
import Swal from "sweetalert2";


registerLocale("es", es);

const customStyles = {
  content: {
    width: "500px",
    // height: "550px",
    // top: "50%",
    // left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const BookingModal = ({ profesional, servicioProfesional}) => {
  // const [isOpen, setIsOpen] = useState(true);
  const { isDateModalOpen, cerrarModal, servicio, professional } = useUiStore();
  const { getAvailablesAppointments, appointmentsAvailables, makeAppointment } =
    useProfesional();
  // const [formSubmitted, setFormSubmitted] = useState(false);
  // let location = useLocation(); 
  // const {id} = useParams();
  

  const [formValues, setFormValues] = useState({
    date: undefined,
    hourSelected: undefined,
  });

  // Aca el evento seria la nueva fecha y el changing es para saber si es date o end
  // Entonces esta funcion nos va a servir para ambas caja de textos tantos como para el end y para el date
  const onDateChanged = (newDate, changing) => {
    if (changing === "hourSelected") {
      setFormValues({
        ...formValues,
        [changing]: newDate.target.value,
      });
    } else {
      setFormValues({
        ...formValues,
        [changing]: newDate,
      });
    }
    
     getAvailablesAppointments(profesional.id, servicio.id, newDate);
     getAvailablesAppointments(servicioProfesional.id, professional.id, newDate);
  };

  const onCloseModal = () => {
    cerrarModal();
  };

  const onClickMakeAppointment = () => {
    if (!formValues.date || !formValues.hourSelected) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Primero tenes que completar los campos solicitados",
      });
      return;
    }
  
    //verifica que venga data
    if (servicioProfesional && professional) {
      makeAppointment(   //primero nos fijamos que se guarde la data de servicioProfesional 
        professional.id,
        servicioProfesional.id,  
        formValues.date,
        formValues.hourSelected
      );
    } else if (servicio) { //en caso de que la data no corresponda guardamos la data del profesional
      
      makeAppointment(
        profesional.id,
        servicio.id,
        formValues.date,
        formValues.hourSelected
      );
    } else {
      //  son undefined
      alert("Error al querer reservar el turno");
    }
  };




  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1 className="text-2xl font-semibold text-center"> Nuevo Turno </h1>
      <hr className="mt-3" />
      <form className="mt-4">
        <div className="mb-2">
          <label>Fecha: </label>
          <br />
          <DatePicker
            dateFormat="yyyy-MM-dd"
            selected={formValues.date}
            className="w-[400px]"
            onChange={(event) => onDateChanged(event, "date")}
            locale="es"
            minDate={new Date()}
            placeholderText="Click para seleccionar fecha"
          />
        </div>
        <select
          name="hourSelected"
          onChange={(event) => onDateChanged(event, "hourSelected")}
        >
          {appointmentsAvailables?.map((hour, idx) => (
            <option key={idx} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <hr />
        <div className="pt-[16px] flex justify-center">
          <ButtonFWComponent
            label={"Guardar"}
            onClick={() => onClickMakeAppointment()}
          />
        </div>
      </form>
    </Modal>
  );
};
