//This is the instructions container this will tell the user what to do
import React from "react";
import './css/instructions.css'


function Instructions(props){
    return(
        <h2>{props.instructions}</h2>
    )

}

export default Instructions

