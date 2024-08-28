// import { useNavigate } from "react-router-dom";
import { ButtonFWComponent } from "../button-fw/ButtonFWComponent";

export const CardServicioHome = ({ name, description,click }) => {
  // const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-2 hover:bg-gray-900 delay-50 duration-100 bg-[#1C1C1E] p-5 rounded-lg w-60 group">
      <img
        src= "/imagetarjeta.jpeg"
        className="w-full rounded shadow"
        alt="Imagen del servicio"
      />
      <h3 className="text-gray-200 font-bold mt-5">{name}</h3>
      <p className="text-gray-400 font-light mt-2 text-xs mb-2">
        {description}
      </p>
      <ButtonFWComponent
        label="Elegir"
        onClick={click}
      />
    </div>
  );
};
