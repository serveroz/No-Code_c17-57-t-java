import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logobarber from "../../../assets/icon/png/logobarber.png";
import logo from "../../../assets/icon/png/usuario2.png";

 export const NavbarBurgerComp = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={logobarber} className="w-36 h-30 ml-2" alt="LogoBarber" />
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block lg:hidden border border-gray-200 rounded-md p-2 focus:outline-none"
        >
          <svg
            className="h-6 w-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className={`lg:flex ${isOpen ? "block" : "hidden"}`}>
          <div className="lg:flex items-center justify-end space-x-8 text-sm mt-4 lg:mt-0">
            <Link to="/home" className="text-gray-200 hover:text-blue-500 transition-colors duration-300">
              Inicio
            </Link>
            <Link to="/servicios" className="text-gray-200 hover:text-blue-500 cursor-pointer transition-colors duration-300">
              Servicios
            </Link>
            <Link to="/profesionales" className="text-gray-200 hover:text-blue-500 cursor-pointer transition-colors duration-300">
              Profesionales
            </Link>
            <Link to="/turnos" className="text-gray-200 hover:text-blue-500 cursor-pointer transition-colors duration-300">
              Turnos
            </Link>
            <button onClick={() => navigate("/perfil")} className="flex items-center">
              <img src={logo} alt="logo" className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};






