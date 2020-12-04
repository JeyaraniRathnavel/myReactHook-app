import React from "react";
import logo from "../logo.svg";
import images from "../Asset/images.jpg";

const Image = () => {
  return (
    <div>
      <h1>Import logo Image from within folder</h1>
      <img src={logo} width="100" height="50" alt="logo" />
      <h1>Import Image from another folder</h1>
      <img src={images} width="100" height="100" alt="pole" />
    </div>
  );
};

export default Image;
