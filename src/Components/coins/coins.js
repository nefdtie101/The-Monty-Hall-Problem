// This is a javascript that will display the amount of coins you gave
import React from "react";
import Row from 'react-bootstrap/Row';
import Coin from '../../img/coin .png'


class Coins extends React.Component{
    constructor(props) {
        super(props);
    }

// This will render the amount of coins you have left
    render() {
        const amountCoins = parseInt(localStorage.getItem("coins"));
        let x = 0;
        let buildArray = [];
        while (x < amountCoins){
            // This will give a coin a unique id
            let coin =[Coin ,x]
            buildArray.push(coin);
            x++
        }
        const array = buildArray
        const FinalCoins = array.map((coin)=>
            <img id={coin[1]} src={coin[0]}/>
        );

        return(
            <div>{FinalCoins}</div>

        )

    }

}
export default Coins