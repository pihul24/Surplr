import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Button(props) {
  return (
    <button 
    type={props.type}
    onClick={props.onClick}
    className={`Button  px-6 py-3
    rounded-full
    bg-gradient-to-r from-blue-600 to-purple-600
    text-white font-semibold
    shadow-2xl
    hover:scale-110
    hover:shadow-[0_0_40px_rgba(99,102,241,0.8)]
    transition-all duration-300
    cursor-pointer
     
    ${props.className}`}
    >
  {props.children? props.children:props.text}
</button>
  );
}

export default Button;