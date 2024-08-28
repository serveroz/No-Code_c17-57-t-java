import { Outlet } from "react-router-dom";
import { NavbarBurgerComp } from "../components/navbar/NavbarBurgerComp";

// Esta es el componente que se va a mostrar a lo largo de todas mis rutas, asqui yo voy a poder reutilizar estilo
export const DashboardLayout = () => {
  return (
    <>
      <NavbarBurgerComp />

      {/* Aca reenderizamos las rutas hijas */}
      <Outlet />

      {/* <FooterComponent /> */}
    </>
  );
};
