import { Navigate, createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";

import {
  CalendarPage,
  HomePage,
  LoginPage,
  PerfilPage,
  RegisterPage,
  ServiciosPage,
  TurnosPage,
  WelcomePage,
  ProfesionalesPage,
} from "../pages";


export const menuRoutes = [
  {
    to: "/welcome",
    title: "Welcome",
    component: <WelcomePage />,
  },
  {
    to: "/login",
    title: "Login",
    component: <LoginPage />,
  },
  {
    to: "/registro",
    title: "Registro",
    component: <RegisterPage />,
  },
  {
    to: "/home",
    title: "Home",
    component: <HomePage />,
  },

  {
    to: "/perfil",
    title: "Perfil",
    component: <PerfilPage />,
  },
  {
    to: "/servicios",
    title: "Servicios",
    component: <ServiciosPage />,
  },
  {
    to: "/profesionales",
    title: "Profesionales",
    component: <ProfesionalesPage />,
  },

  {
    to: "/turnos",
    title: "Turnos",
    component: <TurnosPage />,
  },

  {
    to: "/calendario",
    icon: "fa-solid fa-water",
    title: "Como stream",
    description: "Con stream de mensajes",
    component: <CalendarPage />,
  },
  {
    to: "/turnos",
    icon: "fa-solid fa-water",
    title: "Como stream",
    description: "Con stream de mensajes",
    component: <TurnosPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      ...menuRoutes.map((route) => ({
        path: route.to,
        element: route.component,
      })),
      {
        path: "",
        element: <Navigate to={menuRoutes[0].to} />,
      },
    ],
  },
]);
