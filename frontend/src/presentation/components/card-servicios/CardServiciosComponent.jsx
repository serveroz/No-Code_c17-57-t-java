import { ButtonFWComponent } from "../button-fw/ButtonFWComponent";

export const CardServiciosComponent = ({ name, description,price ,click}) => {
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
                <h1 className="text-sm font-medium text-white truncate dark:text-white">
                  {name}
                </h1>
                <p className="text-sm text-gray-500  dark:text-gray-400">
                  {description}
                </p>
              </div>

              <div className="inline-flex items-centertext-base font-semibold text-white dark:text-white">
                $ {price}
              </div>
              <div>
                <ButtonFWComponent
                  label="Elegir"
                  className="inline-flex  items-center text-base"
                  onClick={click}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
