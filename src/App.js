import React from "react";
import PersonCard from "./components/personCard.jsx";
import './App.css';

function App() {
    return (
      <div className = "family_list">
    <PersonCard firstName = "Maggie" lastName = "Simpson" age = "1" hairColor = "Yellow"/>
    <PersonCard firstName = "Yop" lastName = "Simpson" age = "12" hairColor = "Brown"/>
    <PersonCard firstName = "Lisa" lastName = "Simpson" age = "8" hairColor = "Yellow"/>
    <PersonCard firstName = "Bart" lastName = "Simpson" age = "10" hairColor = "Yellow"/>
      </div>
    )
};
export default App
