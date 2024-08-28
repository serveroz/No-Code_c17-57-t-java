import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProfesional } from "../../../hooks/useProfesional";
import { useServiceStore } from "../../../hooks/useServiceStore";
import { CardProfesionalesHome } from "../../components/card-profesionaleHome/CardProfesionalesHome";
import { CardServicioHome } from "../../components/card-serviciosHome/CardSevicioHome";

export const HomePage = () => {
  const { servicioPage, getServiciosPaginado} = useServiceStore();
  const navigate = useNavigate();

  const onClickProfesional = (profesional) => {
    getProfesionalById(profesional.id);
    navigate(`/profesional/${profesional.id}`);
  };
  

  const onClickServicio = async (servicio) => {
  
    try {
        // Obtener los profesionales asociados al servicio
       

        // Realizar alguna acción con los profesionales obtenidos, como mostrarlos en una lista o navegar a otra página
      

        // Si deseas, puedes navegar a la página del servicio después de obtener los profesionales
        navigate(`/servicio/${servicio.id}`);
    } catch (error) {
        console.error("Error al obtener los profesionales por servicio:", error);
        // Manejar el error aquí, si es necesario
    }
};


  useEffect(() => {
    getServiciosPaginado();
  }, []);

  const { profesionales, getProfesionales, getProfesionalById } =
    useProfesional();
  useEffect(() => {
    // console.log(profesionales);
    getProfesionales();
  }, []);

  return (
    <>
      <header className="py-20 bg-gradient-to-b from-gray-800 to-gray-300 text-center relative">
        <div
          className="absolute  inset-0 bg-opacity-75 bg-cover bg-center"
          style={{
            backgroundImage: `url('/banner1.jpg')`,
            backgroundPosition: "center top",
          }}
        ></div>
        <div className="container min-h-40 mx-auto px-4 relative z-10">
          
        </div>
      </header>

      <h6 className=" bg-gradient-to-b from-gray-800 to-gray-900 text-m py-8 font-light text-center text-black sm:text-4xl lg:text-5xl">
        <section
          id="section-1"
          className="text-3xl font-semibold text-center  text-white capitalize lg:text-4xl dark:text-white lg:inline"
        >
          Servicios
        </section>
      </h6>

      <div className=" flex flex-1 justify-center bg-gradient-to-b  from-gray-900 to-black ">
        <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 my-4 mx-4 ">
          {servicioPage.map((servicio) => (
            <CardServicioHome
              key={servicio.id}
              click={() => onClickServicio(servicio)}
              name={servicio.name}
              description={servicio.description}
            />
          ))}
        </div>
      </div>

      {/* CONTAINER PROFESIONAL USER*/}

      {/*  USER 1*/}
      <section
        id="section-2"
        className="w-full bg-black px-8 py-8  mx-auto"
      >
        <h1 className="text-3xl font-semibold text-center text-white capitalize lg:text-4xl dark:text-white">
          Profesionales
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {profesionales.map((profesional) => (
            <CardProfesionalesHome
              key={profesional.id}
              click={() => onClickProfesional(profesional)}
              firstName={profesional.firstName}
              lastName={profesional.lastName}
              profession={profesional.profession}
            />
          ))}

          {/* USER 4
       <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-gray-200 rounded-xl">
            <a>
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />
            </a>

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-black">
              John Doe
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Peluquero</p>
          </div>

          {/*  USER 4*/}

          {/* <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-gray-200 rounded-xl">
            <a>
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </a>

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-black">
              Mia
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Colorista</p>
          </div>
          {/*  USER 5*/}

          {/* <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-gray-200 rounded-xl">
            <a>
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </a>

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-black">
              Joseph Gonzalez
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Barbero</p>
          </div> */}
          {/*  USER 7*/}

          {/* <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-gray-200 rounded-xl">
            <a>
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1521488741203-dcc320950ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </a>

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-black">
              Emma Doe
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Barbero</p>
          </div>
        </div>  */}
        </div>
      </section>
    </>
  );
};
