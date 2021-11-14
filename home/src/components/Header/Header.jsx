import React from "react";

const Header = ({ title }) => {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">{title}</div>
  );
};

export default Header;
