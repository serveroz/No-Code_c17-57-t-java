export const ButtonFWComponent = ({ label, marginBottom, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ marginBottom: marginBottom + "px" }}
      className="cursor-pointer rounded-md bg-[#D8AB67] px-3.5 py-2.5 text-sm text-white shadow-sm w-full text-center"
    >
      {label ?? "Button Label"}
    </div>
  );
};
