//This component will will start the game for the payer
import React from "react";
import './css/startButton.css'


function StartButton(){
    return(
        <div className='startButtonDiv'>
            <a href='/Game' className='startButton'>Start Game</a>
        </div>

    )
}

export default StartButton