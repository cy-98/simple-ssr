import React from "react";

export const Page: React.FC = (props) => {
  const handleClick = () => {
    console.log("ha  nd  leClick");
  };

  return <h1 onClick={handleClick}>cl  ick  saspdijasd ad th  ing</h1>;
};
