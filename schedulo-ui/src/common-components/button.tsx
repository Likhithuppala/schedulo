import React from "react";
import "./button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button" }) => {
  return (
    <button className="futuristic-btn" onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
