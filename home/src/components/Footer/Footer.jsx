import React from "react";

const Footer = ({ title }) => {
  return (
    <footer className="p-5 bg-green-500 text-white text-3xl font-bold">
      {title}
      Copyrights @2019
    </footer>
  );
};

export default Footer;
