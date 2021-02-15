//This will be the component for the header of the page
import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import './css/header.css'
import { BrowserRouter, Route } from 'react-router-dom'

function Help(){
    window.location.href = "/Start/Help";
}

function Header(props){
    return(
        <Container>
            <Row>
                <h1 className='mainHeading'>The Monty Hall problem</h1>
                <Route  path='/Game' ><button onClick={Help}>?</button></Route>
            </Row>
        </Container>
    )

}
export default Header
