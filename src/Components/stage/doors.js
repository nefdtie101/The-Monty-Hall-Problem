// This is the template for a door of the game.It is clickable
import React from "react";
//Import the css
import './css/doors.css'




class Doors extends React.Component{
    constructor(props) {
        super(props);
        this.sendBack = this.sendBack.bind(this)
    }

//We will know send back the id of the target
    sendBack(e) {
        this.props.OnClicked(e.target.id)

    }




    render() {
        const location = this.props.location;

        return(
           <img  id={this.props.ID} onClick={this.sendBack} src={location}/>
        )
    }
}

 export default Doors