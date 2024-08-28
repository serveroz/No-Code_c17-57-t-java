import { ButtonFWComponent } from "../button-fw/ButtonFWComponent";

export const DetailProfesional = ({
  firstName,
  lastName,
  profession,
  onClickProfesional
}) => {
  return (
    <div className="p-5 bg-[#1C1C1E] rounded-lg flex items-center justify-between space-x-8">
      <div className="flex-1 flex justify-between items-center">
        <div className="flex-shrink-0">
          <img
            className="w-14 h-14 rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="Neil image"
          />
        </div>
        <div className="ml-2 h-8 w-48 rounded   text-white ">
          <h1 className="font-semibold">
            {firstName} {lastName}
          </h1>

          <p className=" text-sm text-gray-500  dark:text-gray-400">
            {profession}
          </p>
        </div>
        <div className="w-24 h-8  rounded-lg sm:mr-1 my-auto">
          <ButtonFWComponent label="Reservar" onClick={onClickProfesional} />
        </div>
      </div>
    </div>
  );
};