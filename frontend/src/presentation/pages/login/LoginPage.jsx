import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore } from "../../../hooks/useAuthStore";

export const LoginPage = () => {
  // const navigate = useNavigate();
  const { startLogin, errorMessage } = useAuthStore();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onClickLogin = ({ username, password }) => {
    startLogin({ username, password });
    // TODO: Implementar login action
    // navigate("/home");
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <div className="bg-indigo-100 flex justify-center items-center h-screen">
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl text-black font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit((data) => onClickLogin(data))}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              {...register("username", {
                required: "El username es requerido",
              })}
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-gray-600"
              autoComplete="off"
            />
            <p className="text-red-600 ">{errors.username?.message}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              {...register("password", {
                required: "El password es requerido",
                minLength: {
                  value: 6,
                  message: "La contraseña debe de tener 6 caracteres o mas",
                },
              })}
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-gray-600"
              autoComplete="off"
            />
            <p className="text-red-600">{errors.password?.message}</p>
          </div>
          <Link className="text-gray-400 hover:text-gray-500 transition-colors duration-300" to="/registro">Crear cuenta</Link>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
