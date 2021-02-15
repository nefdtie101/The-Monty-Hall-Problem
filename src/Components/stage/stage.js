//This is the sage component This is were the game will be paled
import React from "react";
import Container from 'react-bootstrap/Container';
import Doors from './doors'
import Row from 'react-bootstrap/Row';
import Door from '../../img/Door.png'
import DoorClicked from '../../img/Door selected.png'
import DoorLose from '../../img/loose.png'
import DoorWin from '../../img/win.png'
import Instructions from "../header/Instructions";
import { BrowserRouter, Route } from 'react-router-dom'
import RandomBTN from "../Buttens/RandomBTN";
import DoorsNonClick from "./doorsNoClick";

//This will generate random number between 0-2
const randomDoor = Math.floor(Math.random() * 3) ;


// We will be sate object
let state ={
    door1:Door ,
    door2:Door ,
    door3:Door,
    selected1:false,
    selected2:false,
    selected3:false,
    open1 : false,
    open2 : false,
    open3 : false,
    win1:false,
    win2:false,
    win3:false,
    stage1 :'Please select a door ?',
    stage2 : 'Do you wish to stick or switch',
    win : false,
    coins : parseInt(localStorage.getItem("coins")),



}

//This  statement will turn one door win to true
if(randomDoor === 0){
    state.win1 = true;
}
else if(randomDoor === 1){
    state.win2 = true
}
else if(randomDoor === 2){
    state.win3 = true;
}

//Creating the component where the game is played
class Stage extends React.Component{
    constructor(props) {
        super(props);
        this.state = state;
        this.changeDoorToClicked= this.changeDoorToClicked.bind(this);
        this.openOneDoor = this.openOneDoor.bind(this);
        this.stickBtn = this.stickBtn.bind(this);
        this.switchBtn = this.switchBtn.bind(this);
        this.keepPlying = this.keepPlying.bind(this);
    }
    // This function will select a door !
    changeDoorToClicked(e){


        if(e==="1"){

            state.selected1=true;
            state.selected2=false;
            state.selected3=false;
            state.door1 =DoorClicked;
            state.door2 =Door;
            state.door3= Door;
            this.props.history.push('/Game/Selected')
            this.setState(state)
        }
        else if(e==="2"){

            state.selected2=true;
            state.selected1 =false;
            state.selected3 =false;
            state.door2 =DoorClicked;
            state.door1 =Door;
            state.door3 = Door;
            this.props.history.push('/Game/Selected')
            this.setState(state)
        }
        else if(e==="3"){

            state.selected3=true;
            state.selected1 =false;
            state.selected2 =false;
            state.door3 =DoorClicked;
            state.door1 =Door;
            state.door2 =Door;
            this.props.history.push('/Game/Selected')
            this.setState(state)
        }
    }

    // This function determines which door should open
    openOneDoor(){
        this.props.history.push('/Game/Pick')
        //First scenario
        if(state.selected1===true){
            if(state.win2===false){
                state.door2 = DoorLose;
                state.open2 = true;
                this.setState(state)
            }
            else if (state.win3 ===true){
                state.door3 = DoorLose;
                state.open3 = true;
                this.setState(state)
            }

        //Second Scenario
        }
        else if (state.selected2===true){
            if (state.win1 ===false){
                state.door1 = DoorLose;
                state.open1 = true;
                this.setState(state)
            }
            else if(state.win3 ===false){
                state.door3 = DoorLose;
                state.open3 = true;
                state.open3 = true;
                this.setState(state)
            }
        }
        //Third scenario
        else if(state.selected3===true){
            if (state.win1 === false){
                state.door1 = DoorLose;
                state.open1 = true;
                this.setState(state)
            }
            else if(state.win2===false){
                state.door2= DoorLose;
                state.open2 = true;
                this.setState(state)
            }
        }



    }

    //This is the stick Button
    stickBtn(){

        //First scenario
        if(state.selected1 === true){
            if(state.win1===true){
               state.door1 =DoorWin;
               state.win = true;
                this.setState(state)
            }
            else {
                state.door1 = DoorLose;
                this.setState(state)

            }
        }

        //Second scenario
        if(state.selected2 === true){
            if(state.win2===true){
                state.door2 =DoorWin;
                state.win = true;
                this.setState(state)
            }
            else {
                state.door2 = DoorLose;
                this.setState(state)
            }
        }
        //Third scenario
        if(state.selected3 === true){
            if(state.win3===true){
                state.door3 =DoorWin;
                state.win = true;
                this.setState(state)
            }
            else {
                state.door3 = DoorLose;
                this.setState(state)
            }
        }

        //This will add a coin if you win
        if(state.win===true){
            let coins = parseInt(localStorage.getItem("coins"));
            coins = coins + 1;
            localStorage.setItem('coins',coins.toString())
            window.location.href = "/Game/Win"

        }
        else{
            let coins = parseInt(localStorage.getItem("coins"));
            coins = coins - 1;
            localStorage.setItem('coins',coins.toString())
            window.location.href = "/Game/No"
        }
    }

    //This is the switch button
    switchBtn(){

        //First scenario
        if(state.selected1===true) {
            if (state.open2 === true) {
                if (state.win3 === true) {
                    state.door3 = DoorWin;
                    state.win = true;
                    this.setState(state)

                } else {
                    state.door3 = DoorLose;
                    this.setState(state)

                }
            } else if (state.open3 === true) {
                if (state.win2 === true) {
                    state.door2 = DoorWin;
                    state.win = true;
                    this.setState(state)
                } else {
                    state.door2 = DoorLose;
                    this.setState(state)

                }
            }
        }

        //Second scenario.
        if(state.selected2===true) {
            if (state.open1 === true) {
                if (state.win3 === true) {
                    state.door3 = DoorWin;
                    state.win = true;
                    this.setState(state)

                } else {
                    state.door3 = DoorLose;
                    this.setState(state)

                }
            } else if (state.open3 === true) {
                if (state.win1 === true) {
                    state.door1 = DoorWin;
                    state.win = true;
                    this.setState(state)

                } else {
                    state.door1 = DoorLose;
                    this.setState(state)

                }
            }
        }

        //Third scenario
        if(state.selected3===true) {
            if (state.open2 === true) {
                if (state.win1 === true) {
                    state.door1 = DoorWin;
                    state.win = true;
                    this.setState(state)

                } else {
                    state.door1 = DoorLose;
                    this.setState(state)
                }
            } else if (state.open1 === true) {
                if (state.win2 === true) {
                    state.door2 = DoorWin;
                    state.win = true;
                    this.setState(state)

                } else {
                    state.door2 = DoorLose;
                    this.setState(state)
                }
            }
        }
        //This will add a coin if you win
        if(state.win===true){
            let coins = parseInt(localStorage.getItem("coins"));
            coins = coins + 1;
            localStorage.setItem('coins',coins.toString())
            window.location.href = "/Game/Win"
        }
        else{
            let coins = parseInt(localStorage.getItem("coins"));
            coins = coins - 1;
            localStorage.setItem('coins',coins.toString())
            window.location.href = "/Game/No"
        }



    }

    //This is the keep playing button
    keepPlying(){
        //This determines iof you have coins to play next round
        if (state.coins <= 0){
            alert("Sorry all your coins are up ! \n You loose");
            window.location.href = "/";
        }else {
            window.location.href = "/Start";
        }
        // If you have 10 coins you wim the game
        if (state.coins >= 10){
            alert("Congratulations you won!!\n Ten is the maximum coins you can have.");
            window.location.href = "https://www.youtube.com/watch?v=04854XqcfCY&ab_channel=QueenOfficial"
        }



    }

    //This will render the page
    render() {


        return(
            <Container>
               <Row>
                   <Route exact={true} path="/Game/Win">
                       <Instructions instructions='You Win a Coin!'/>
                       <RandomBTN clicked={this.keepPlying} btn='Keep Playing' />
                   </Route>
                   <Route exact={true} path="/Game/No">
                       <Instructions instructions='You lost a Coin'/>
                       <RandomBTN clicked={this.keepPlying} btn='Keep Playing' />
                   </Route>
                   <Route exact={true} path="/Game"><Instructions instructions={state.stage1} /></Route>
                   <Route exact={true} path="/Game/Selected"><Instructions instructions={state.stage1} /></Route>
                   <Route exact={true} path="/Game/Pick"><Instructions instructions={state.stage2} /></Route>
                   <Route exact={true} path="/Game">
                       <Doors ID='1' location={this.state.door1} OnClicked={this.changeDoorToClicked} />
                       <Doors ID='2' location={this.state.door2} OnClicked={this.changeDoorToClicked}/>
                       <Doors ID='3' location={this.state.door3} OnClicked={this.changeDoorToClicked}/>
                   </Route>
                   <Route exact={true} path="/Game/Selected">
                       <Doors ID='1' location={this.state.door1} OnClicked={this.changeDoorToClicked} />
                       <Doors ID='2' location={this.state.door2} OnClicked={this.changeDoorToClicked}/>
                       <Doors ID='3' location={this.state.door3} OnClicked={this.changeDoorToClicked}/>
                   </Route>

                   <Route  path="/Game/Pick">
                       <DoorsNonClick ID='1' location={this.state.door1}  />
                       <DoorsNonClick ID='2' location={this.state.door2} />
                       <DoorsNonClick ID='3' location={this.state.door3} />
                   </Route>

               </Row>

                <Route exact={true} path='/Game/Pick'>
                    <Row>
                        <RandomBTN clicked={this.stickBtn} btn='Stick'/>
                        <RandomBTN clicked={this.switchBtn} btn='Switch'/>
                    </Row>
                </Route>

                <Route exact={true} path="/Game/Selected">
                    <Row>
                        < RandomBTN btn='Next' clicked={this.openOneDoor}/>
                    </Row>
                </Route>

            </Container>


        )
    }


}

export default Stage