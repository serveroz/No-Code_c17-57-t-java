import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage, WelcomePage } from "../presentation/pages";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/welcome" />} />
      <Route path="welcome" element={<WelcomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="registro" element={<RegisterPage />} />
    </Routes>
  );
};
