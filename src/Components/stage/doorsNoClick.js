// This is the template for a non clickable door for this game

import React from "react";
import './css/doors.css'


class DoorsNonClick extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const location = this.props.location;

        return (
            <img id={this.props.ID} src={location}/>
        )
    }
}
export default DoorsNonClick


