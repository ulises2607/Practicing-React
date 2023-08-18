import React from "react";
import '../StyleSheets/BotonClear.css'

const BotonCLear = (props) => (
    <div 
        className="boton-clear"
        onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default BotonCLear;