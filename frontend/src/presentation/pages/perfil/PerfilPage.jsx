import { useEffect } from "react";
import foto from "../../../assets/icon/png/hombre.png";
//import lapiz from "../../../assets/icon/png/lapiz.png";
//import edit from "../../../assets/icon/svg/edit-image.svg";
import { useAuthStore } from "../../../hooks/useAuthStore";
// import { useUserId } from "../../../hooks/useUserId";
import { ButtonFWComponent } from "../../components/button-fw/ButtonFWComponent";

export const PerfilPage = () => {
  const { startLogout, user } = useAuthStore();
  // const { getUserById, customer } = useUserId();

  useEffect(() => {
    console.log(user);
    // getUserById(user.id);
  }, [user]);

  return (
    <div className="bg-black w-full min-h-screen flex flex-col items-center justify-center px-[30px]">
      <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-[1024px]">
        <div className="w-[200px] h-[300px] mt-20 flex flex-col items-center justify-center">
          <img src={foto} alt="fotoperfil" />
          {/* <div className="mt-4">
            <img src={edit} alt="edit" />
          </div> */}
        </div>
        <div className="flex flex-col sm:pl-14 w-full sm:w-auto h-[400px] justify-around text-white mt-4 sm:mt-0">
          {/* <ItemLabel label={user.username} /> */}
          <ItemLabel label={user.username} />
          <ItemLabel label={user.firstName} />
          <ItemLabel label={user.lastName} />
          <ItemLabel label={user.phone} />
          <ItemLabel label={user.email} />
          <ItemLabel label="************" />
          <div className="mt-4">
            <ButtonFWComponent label="Exit" onClick={startLogout} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemLabel = ({ label }) => {
  return (
    <div className="flex flex-row w-full ml-14">
      <div className="w-full">
        <label>{label}</label>
      </div>
{/*    lapiz    */}
    </div>
  );
};
