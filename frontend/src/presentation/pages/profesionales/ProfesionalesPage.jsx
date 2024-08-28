/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProfesional } from "../../../hooks/useProfesional";
import { CardProfesionales } from "../../components/card-profesionales/CardProfesionales";

export const ProfesionalesPage = () => {
  const navigate = useNavigate();
  const { profesionales, getProfesionales, getProfesionalById } =
    useProfesional();
  useEffect(() => {
    getProfesionales();
  }, []);

  const onClickProfesional = (profesional) => {
    getProfesionalById(profesional.id);
    navigate(`/profesional/${profesional.id}`);
  };

  return (
    <div>
      <div className="bg-gradient-to-b flex justify-center from-gray-800 to-black h-screen items-center  px-16">
        <div className="flex max-w-lg">
          <div className="m-8 flex-col space-y-4">
            {profesionales.map((profesional) => (
              <CardProfesionales
                key={profesional.id}
                click={() => onClickProfesional(profesional)}
                firstName={profesional.firstName}
                lastName={profesional.lastName}
                profession={profesional.profession}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
