import { useNavigate } from "react-router-dom";

import { ButtonFWComponent } from "../../components/button-fw/ButtonFWComponent";

export const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-screen ">
        <div className="w-full h-screen bg-gradient-to-b from-black via-gray-600 to-transparent relative " >
        <div className="absolute inset-0 bg-opacity-80 bg-cover bg-center" style={{ backgroundImage: `url('/home.jpeg')`, backgroundPosition: 'center ' }}></div>
  <div className="container mx-auto px-4 relative z-10">
    
  </div>
          <div className="w-full  inset-0 relative   h-screen pb-170 flex flex-col justify-end items-center" >
            <span className="mb-6 text-white  font-light leading-snug tracking-tight text-g1 sm:text-4xl sm:leading-snug">
              Bienvenidos a BarberShop
            </span>
            <span className="text-base font-light  text-gray-200">
              La barbería que estabas buscando
            </span>
            <div className="button-1 gap-2 mt-10 flex flex-row items-center my-8 md:flex-row mb-[50px]">
              <ButtonFWComponent
                label="Login"
                marginBottom="19"
                onClick={() => navigate("/login")}
              />
              <ButtonFWComponent
                label="Register"
                marginBottom="19"
                onClick={() => navigate("/registro")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
