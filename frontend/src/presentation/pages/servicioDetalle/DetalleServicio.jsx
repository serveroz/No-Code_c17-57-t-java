import { useServiceStore } from "../../../hooks/useServiceStore";
import { useEffect } from "react";
import { ButtonFWComponent } from "../../components/button-fw/ButtonFWComponent";
import { useParams, useNavigate } from 'react-router-dom';
import { DetailLista } from '../../components/Detailservicio/DetailLista';
import { BookingModal } from "../../components/modals/BookingModal";
import { useUiStore } from "../../../hooks/useUiStore";
import { DetailProfesional } from "../../components/Detailservicio/DetailProfesional";

export const DetalleServicio = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { servicioProfesional, getProfesionalesPorServicio } = useServiceStore();
  const { onModal} = useUiStore();

  const volver = () => {
    navigate(-1);
  };

  useEffect(() => {
    getProfesionalesPorServicio(id);
  }, [id]);

  const onClickProfesional = (professional) => {
    onModal(professional);
  };

  // Lógica para abrir el modal cuando se hace clic en reservar cita

  return (
    <>
      <div className="bg-gradient-to-b from-gray-800 to-black h-screen min-h-screen flex flex-col items-center justify-center">
        <div className="absolute top-16 mt-14 ml-4 left-0  z-32">
          <ButtonFWComponent label="Regresar" onClick={volver} />
        </div>
        <div className="text-white p-4 md:p-8">
          <div className="relative ">
            {servicioProfesional && (
              <DetailLista
                name={servicioProfesional.name}
                description={servicioProfesional.description}
              />
            )}
          </div>
        </div>
        <div className="flex max-w-lg">
          <div className="m-8 flex-col space-y-4">
            {servicioProfesional && servicioProfesional.employees && servicioProfesional.employees.map((profesionales) => (
              <DetailProfesional
                key={profesionales.id}
                profesionales={profesionales}
                firstName={profesionales.firstName}
                lastName={profesionales.lastName}
                profession={profesionales.profession}
                onClickProfesional={() => onClickProfesional(profesionales)}
              />
            ))}
          </div>
        </div>
      </div>
      <BookingModal servicioProfesional={servicioProfesional} /> 
    </>
  );
};
