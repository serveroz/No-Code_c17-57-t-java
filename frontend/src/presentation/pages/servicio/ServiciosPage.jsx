import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useServiceStore } from "../../../hooks/useServiceStore";
import { CardServiciosComponent } from "../../components/card-servicios/CardServiciosComponent";

export const ServiciosPage = () => {
  const { servicios, getServicios, getProfesionalesPorServicio } = useServiceStore();
  const navigate = useNavigate();

  useEffect(() => {
    getServicios();
  }, []);

  const onClickServicio = async (servicio) => {
    try {
      // Obtener los profesionales asociados al servicio
      await getProfesionalesPorServicio(servicio.id);

      // Si deseas, puedes navegar a la página del servicio después de obtener los profesionales
      navigate(`/servicio/${servicio.id}`);
    } catch (error) {
      console.error("Error al obtener los profesionales por servicio:", error);
      // Manejar el error aquí, si es necesario
    }
  };

  return (
    <>
    <div className="bg-gradient-to-b flex justify-center from-gray-800 to-black h-screen">
      <div className="max-w-2xl mt-20 mx-auto">
        <div className="p-4 overflow-auto max-h-[500px] max-w-md rounded-lg border shadow-md sm:p-8 bg-[#1C1C1E] dark:border-gray-800">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold leading-none text-white dark:text-white">
              Lista de servicios
            </h3>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {servicios.map((servicio) => (
              <CardServiciosComponent
                key={servicio.id}
                click={() => onClickServicio(servicio)}
                name={servicio.name}
                description={servicio.description}
                price={servicio.price}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};
