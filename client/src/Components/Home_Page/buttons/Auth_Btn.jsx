import React from "react";
import './Auth_Btn.css';

const authButton=(props)=>{
return(
    <button id="btn" className="z-10 w-28 h-16 bg-transparent border-2 border-white hover:bg-[#93C534]">
        {props.children}
    </button>
)
}

export default authButton;