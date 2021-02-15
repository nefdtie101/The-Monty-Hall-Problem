
import './App.css';
import Stage from './Components/stage/stage.js'
import Header from "./Components/header/header.js";
import StartButton from "./Components/Buttens/startButton.js";
import { BrowserRouter, Route } from 'react-router-dom' ;
import Coins from "./Components/coins/coins.js";
import RandomBTN from "./Components/Buttens/RandomBTN.js";
import Help from "./Components/help/help.js";

// This function adds items to locale storage
function addCoinToStorageFirst(){
    localStorage.setItem("coins","3");
    window.location.href = "/Start";
}
// This function is part of help
function help(){
    window.location.href = "/Start/Help";
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Route exact={true} path='/'>
                <RandomBTN btn='Add Coins' clicked={addCoinToStorageFirst}/>
                <Help/>
            </Route>
            <Route path='/Game' component={Stage} />
            <Route path='/Start'>
                <StartButton/>
               <Route exact={true} path='/Start/Help' ><Help/></Route>
               <Coins/>
            </Route>
            <Route path='/Game'><Coins/></Route>
            <Route exact={true} path='/Start'><button onClick={help}>?</button></Route>
        </BrowserRouter>




    </div>
  );
}

export default App;
