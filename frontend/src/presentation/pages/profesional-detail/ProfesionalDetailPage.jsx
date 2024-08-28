import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useProfesional } from "../../../hooks/useProfesional";
import { useUiStore } from "../../../hooks/useUiStore";
import { DetailLista } from "../../components/Detailprofesionales/DetailLista";
import { DetailProfesional } from "../../components/Detailprofesionales/DetailProfesional";
import { ButtonFWComponent } from "../../components/button-fw/ButtonFWComponent";
import { BookingModal } from "../../components/modals/BookingModal";

export const ProfesionalDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtenemos el ID del profesional
  const { profesional, getProfesionalById } = useProfesional();
  const { abrirModal } = useUiStore();

  const volver = () => {
    navigate(-1);
  };

  useEffect(() => {
    getProfesionalById(id); // obtener los detalles del profesional por su ID
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!profesional) {
    return <Navigate to="/home" />;
  }

  const onClickServicio = (service) => {
    abrirModal(service);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 to-black h-screen min-h-screen flex flex-col items-center justify-center">
        <div className="absolute top-16 mt-14 ml-4 left-0  z-32">
          <ButtonFWComponent label="Regresar" onClick={volver} />
        </div>
        {profesional && ( //verifico que traiga data
          <div className="text-white mt-14 border-black md:p-8">
            <div className="flex items-center mt-16 gap-10 justify-center">
              <DetailProfesional
                firstName={profesional.firstName}
                lastName={profesional.lastName}
              />
            </div>
          </div>
        )}

        {profesional && profesional.services && (
          <div className="max-w-2xl mt-4 mx-auto">
            <div className="p-4 overflow-auto max-h-[500px] max-w-md rounded-lg border shadow-md sm:p-8 bg-[#1C1C1E] dark:border-gray-800">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {profesional.services.map((servicio) => (
                  <li key={servicio.id} className="py-4">
                    <DetailLista
                      servicio={servicio}
                      onClickService={() => onClickServicio(servicio)}
                    />
                    <p className="text-sm">
                      Duración del Servicio: {servicio.durationMinutes} min
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <BookingModal profesional={profesional} />
    </>
  );
};
