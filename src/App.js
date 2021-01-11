import React from "react";
import Person from "./components/Person";
import './App.css';

function App() {


    return (
        <div className="persons-list">
            < Person firstName="Yop" lastName="of Pars" ps5Consoles="1" consoleColor = "Pink"/>
            < Person firstName="Smees" lastName="of Suomi" ps5Consoles="-1" consoleColor = "Red"/>
            < Person firstName = "Mr Winters" lastName = "" ps5Consoles = "1" consoleColor = "Blue"/>
            < Person firstName="Pebo" lastName = "" ps5Consoles = "0" consoleColor = "Yellow"/>
            < Person firstName="Husalu" lastName = "" ps5Consoles = "0" consoleColor = "Pink"/>
        </div>
        );
    //};
};

export default App;
