// This is a general purpose butten

import React from "react";
import './css/submitBtn.css'


class RandomBTN extends React.Component{
    constructor(props) {
        super(props);
        this.clickEvent = this.clickEvent.bind(this)
    }
    clickEvent(e){
      this.props.clicked(e)
    }

    render() {
        return(
            <button onClick={this.clickEvent}>{this.props.btn}</button>
        )
    }
}

export default RandomBTN