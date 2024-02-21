import React from "react";
import "./Button.css";
import "./Var.css";

const Button = ({ onClick, children }) => {
  return (
    <>
      <button onClick={onClick} className="button">
        {children}
      </button>
    </>
  );
};

export default Button;
