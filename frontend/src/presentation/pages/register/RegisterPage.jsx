import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore } from "../../../hooks/useAuthStore";
import {  useNavigate } from 'react-router-dom';

// const formRegister = {
//       username: "joaco",
//       firstName: 'joaquin',
//       lastName: 'Carrizo',
//       email: "asd@asd.asd",
//       password: "123456",
//       confirmPassword: "123456",
// }




export const RegisterPage = () => {
 const navigate = useNavigate();

 const volver = () => {
  navigate(-1);
};

  const { startRegister } = useAuthStore();

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      businessId: 2,
      password: "",
      confirmPassword: "",
    },
  });

  const onClickRegister = ({
    username,
    email,
    // businessId,
    firstName,
    lastName,
    phone,
    password,
    confirmPassword,
  }) => {
    // console.log(data);
    // event.preventDefault();
    if (password !== confirmPassword) {
      return;
    }

    startRegister({
      username,
      email,
      // businessId,
      firstName,
      lastName,
      phone,
      password,
    });

    // TODO: realizar registro action
    // navigate("/home");
  };

  // useEffect(() => {
  //   if ( errorMessage !== undefined ) {
  //     Swal.fire('Error en la autenticación', errorMessage, 'error');
  //   }
  // }, [errorMessage])

  return (
    <div className=" bg-indigo-100 flex justify-center items-center">
      <div className="absolute top-14  ml-4 left-0  z-30 mx-auto">
          
        </div>
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form
          onSubmit={handleSubmit((data) => onClickRegister(data))}
          className="bg-white p-10 rounded-lg shadow-lg min-w-full"
        >
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Formregister
          </h1>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-gray-800 font-semibold my-3 text-md"
            >
              Username
            </label>
            <input
              {...register("username", {
                required: "El username es requerido",

                minLength: { value: 5, message: "Debe tener mas de 5 letras" },
              })}
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <p className="text-red-600">{errors.username?.message}</p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-gray-800 font-semibold my-3 text-md"
            >
              FirstName
            </label>
            <input
              {...register("firstName", {
                required: "El firstName es requerido",

                minLength: { value: 4, message: "Debe tener mas de 4 letras" },
              })}
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="FirstName"
            />
            <p className="text-red-600">{errors.firstName?.message}</p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="lastName"
              className="block text-gray-800 font-semibold my-3 text-md"
            >
              LastName
            </label>
            <input
              {...register("lastName", {
                required: "El lastName es requerido",

                minLength: { value: 5, message: "Debe tener mas de 5 letras" },
              })}
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="LastName"
            />
            <p className="text-red-600">{errors.lastName?.message}</p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="phone"
              className="block text-gray-800 font-semibold my-3 text-md"
            >
              Phone
            </label>
            <input
              {...register("phone", {
                required: "El phone es requerido",

                minLength: {
                  value: 6,
                  message: "El celular debe de tener 6 caracteres o mas",
                },
              })}
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none text-black"
              type="phone"
              name="phone"
              id="phone"
              placeholder="Phone"
            />
            <p className="text-red-600">{errors.phone?.message}</p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-gray-800 font-semibold my-3 text-md"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: "El email es requerido",
              })}
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none  text-black"
              type="text"
              name="email"
              id="email"
              placeholder="@email"
            />
            <p className="text-red-600 ">{errors.email?.message}</p>
          </div>
          {/* <div className="mb-2">
            <label
              htmlFor="bussinesId"
              className="block text-gray-800 font-semibold my-3 text-md"
            >
              BusinessId
            </label>
            <input
              {...register("businessId", {
                required: "El BussinesId es requerido",
              })}
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none  text-black"
              name="businessId"
              id="businessId"
              // placeholder="@bussinesId"
            />
            <p className="text-red-600 ">{errors.businessId?.message}</p>
          </div> */}

          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-gray-800 font-semibold my-3 text-md"
            >
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
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none  text-black"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <p className="text-red-600">{errors.password?.message}</p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="confirm"
              className="block text-gray-800 font-semibold my-3 text-md"
            >
              Confirm password
            </label>
            <input
              {...register("confirmPassword", {
                required: true,
                validate: (val) => {
                  if (watch("password") != val) {
                    Swal.fire(
                      "Error en registro",
                      "Contraseñas no son iguales",
                      "error"
                    );
                    return;
                  }
                },
              })}
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none  text-black"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
            />
            <p className="text-red-600">{errors.confirmPassword?.message}</p>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
          >
            Register
          </button>
          <button
            onClick={volver}
            type="button"
            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};
