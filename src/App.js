import React from "react";
import './App.css'
import NavBar from "./components/NavBar";
import AboutBar from "./components/AboutBar";
import AboutMeBar from "./components/AboutMeBar";
import MyWorkBar from "./components/MyWorkBar";


function App(){
    return(
        <div className="App">
            <NavBar></NavBar>
            <AboutBar></AboutBar>
            <AboutMeBar></AboutMeBar>
            <MyWorkBar></MyWorkBar>

        </div>
    )
}

export default App;