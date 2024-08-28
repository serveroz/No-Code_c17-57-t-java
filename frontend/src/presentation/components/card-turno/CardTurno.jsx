import { ButtonFWComponent } from "../button-fw/ButtonFWComponent";

export const CardTurno = ({ appointment, onClick }) => {
  return (
    <>

<div className="items-center  justify-center mx-auto flex">
  
  <card className="bg-gray-900 mt-2 text-gray-200 w-96 rounded-lg">
    
    <header className="font-bold text-center text-lg px-5 py-4">
    <label>Servicio: {appointment.service.name}</label>
    </header>
    
    <div className="col-span-3 px-3 text-center  flex flex-col"> 
      
      <label>Horario: {appointment.datetime.split(" ")[1]} hs</label>
      <label>Fecha: {appointment.datetime.split(" ")[0]}</label>
      <label>
        Duración: {appointment.service.durationMinutes} minutos
      </label>
  </div>
    
    <main className="px-5">
      
      <content >
        <div className="col-span-2 py-2 ">
        <ButtonFWComponent label="Cancelar" onClick={onClick} />
        </div>
        
      </content>
      
      
    </main>
   
      
  </card>
  
</div>






{/* 
      <div className="w-full min-h-screen bg-gray-700 flex flex-col items-center justify-center">
        <div className="bg-black w-full max-w-[1021px] mx-auto p-8 sm:py-16 lg:py-24 flex flex-col sm:flex-row items-center justify-evenly">
          <div className="w-full sm:w-[414px] h-[162px] flex flex-col justify-between mb-4 sm:mb-0 sm:mr-8">
            <label>Servicio: {appointment.service.name}</label>
            <label>Horario: {appointment.datetime.split(" ")[1]} hs</label>
            <label>Fecha: {appointment.datetime.split(" ")[0]}</label>
            <label>
              Duración: {appointment.service.durationMinutes} minutos
            </label>
          </div>
          <div className="w-40 sm:w-[414px] h-[165px] flex flex-col justify-center">
            <div className="w-full h-[16px]"></div>
            <ButtonFWComponent label="Cancelar" onClick={onClick} />
          </div>
        </div>
      </div> */}
    </>
  );
};
