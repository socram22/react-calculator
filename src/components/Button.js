import React from "react";
import "./Button.css";

const Button = (props) => {
  const notNumber = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };
  return (
    <button
      className={`btn ${notNumber(props.children) && "operador"}`}
      onClick={() => props.onClick(props.children)}
    >
      {props.children}
    </button>
  );
};

export default Button;
