export const CardProfesionalesHome = ({
  firstName,
  lastName,
  profession,
  click,
}) => {
  return (
    <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-gray-200 rounded-xl">
      {/* <a onClick={click}> */}
      <a onClick={click}>
        <img
          className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
      </a>
      <h1 className="mt-4 text-2xl font-semibold text-white capitalize dark:text-white group-hover:text-black">
        {firstName} {lastName}
      </h1>
      <p className="text-sm text-black dark:text-white">{profession}</p>
    </div>
  );
};
