


export const DetailLista = ({ name, description}) => {
  return (
    <div className="flow-root ">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 rounded-lg bg-[#1C1C1E]  p-5 min-w-0">
                <h1 className="text-m font-bold text-gray-200 truncate dark:text-white">
                  {name}
                </h1>
                <p className="text-sm text-white dark:text-gray-200">
                  {description}
                </p>
                
              </div>


              
              <div>
                
              </div>
            </div>
          </li>
        </ul>
      </div>
   
  );
};