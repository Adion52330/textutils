import React from "react";

const Alert = ({ text, show }) => {
  const display = show;
  return (
    <div
      className={`bg-[#e3a2ee] ${
        display ? "opacity-100" : "opacity-100"
      } text-[#ac5fdb] text-sm px-5 py-2 rounded-full transition`}
    >
      <h1 className="transition">{text}</h1>
    </div>
  );
};

export default Alert;
