import React from "react";
import Person from "./components/PersonCard";
import './App.css';

function App() {


    return (
        <div className="persons-list">
            < Person firstName="Yop" lastName="of Pars" age ={3} hairColor = "Brunette"/>
            < Person firstName="Smees" lastName="of Suomi" age ={3} hairColor = "Dirty Blonde"/>
            < Person firstName = "Mr Winters" lastName = "" age  = {1} hairColor = "White"/>
            < Person firstName="Pebo" lastName = "" age  = {1} hairColor = "Blonde"/>
            < Person firstName="Husalu" lastName = "" age  = {1} hairColor = "Pink"/>
        </div>
        );
    //};
};

export default App;
