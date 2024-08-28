import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore } from "../hooks/useAuthStore";
import { AuthRouter } from "./AuthRouter";
import { BarberRoutes } from "./BarberRoutes";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();
  // const authStatus = "authenticated"; //not-authenticated

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <div className="h-screen bg-white">
    <div className="flex justify-center items-center h-full">
      <a>
      <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt=""/>
      </a>
    </div>
    </div>;
  }

  return (
    <>
      <Routes>
        {status === "authenticated" ? (
          <>
            {Swal.hideLoading()}
            <Route path="/*" element={<BarberRoutes />} />
          </>
        ) : (
          <Route path="/*" element={<AuthRouter />} />
        )}
      </Routes>
    </>
  );
};
