import { Navigate, Route, Routes } from "react-router-dom";
import { NavbarBurgerComp } from "../presentation/components/navbar/NavbarBurgerComp";
import {
  CalendarPage,
  HomePage,
  PerfilPage,
  ProfesionalDetailPage,
  ProfesionalesPage,
  ServiciosPage,
  TurnosPage,
  DetalleServicio
} from "../presentation/pages";


export const BarberRoutes = () => {
  return (
    <>
      <NavbarBurgerComp />

      <Routes>
        <Route path="/*" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="perfil" element={<PerfilPage />} />
        <Route path="servicios" element={<ServiciosPage />} />
        <Route path="profesionales" element={<ProfesionalesPage />} />
        <Route path="profesional/:id" element={<ProfesionalDetailPage />} />
        <Route path="servicio/:id" element={<DetalleServicio />} />
        <Route path="turnos" element={<TurnosPage />} />
        <Route path="calendario" element={<CalendarPage />} />
      </Routes>
    </>
  );
};
