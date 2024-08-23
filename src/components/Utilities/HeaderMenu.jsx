import React from "react";

const HeaderMenu = ({ title }) => {
  return (
    <div>
      <div className="p-9">
        <h3 className="text-3xl text-center text-primary font-bold italic">{title}</h3>
      </div>
    </div>
  );
};

export default HeaderMenu;
