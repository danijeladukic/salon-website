import React from "react";
import './App.css'
import NavBar from "./components/NavBar";
import AboutBar from "./components/AboutBar";
import AboutMeBar from "./components/AboutMeBar";
import MyWorkBar from "./components/MyWorkBar";
import ServiceBar from "./components/ServiceBar";
import { useState } from "react";


function App(){
    const [show, setShow] = useState(false)

    return(
        <div className="App">
            <NavBar></NavBar>
            <AboutBar></AboutBar>
            <AboutMeBar></AboutMeBar>
            <MyWorkBar></MyWorkBar>
            <ServiceBar></ServiceBar>

        </div>
    )
}

export default App;