import { ButtonFWComponent } from "../button-fw/ButtonFWComponent";

export const DetailLista = ({ servicio, onClickService }) => {
  return (
    <>
      <div className="flow-root ">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <h1 className="text-sm font-medium text-gray-200 truncate dark:text-white">
                  {servicio.name}
                </h1>

                <p className="text-sm text-white dark:text-gray-200">
                  {servicio.description}
                </p>
                
              </div>
              <div className="inline-flex items-centertext-base font-semibold text-white dark:text-white">
                ${servicio.price}
              </div>
              <div>
                <ButtonFWComponent
                  label="Elegir"
                  className="inline-flex  items-center text-base"
                  onClick={onClickService}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
