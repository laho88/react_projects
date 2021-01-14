import React, {useState} from "react";
// import Person from "./components/PersonCard";
import UserForm from './components/UserForm_(More_Forms_)';
import InputFieldReflector from './components/UserForm_Input_Reflector';
import './App.css';

function App() {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const HandleFormInputs = (e) => {
        console.log("E:", e);
        const trgtData = e.target;
        const inputName = trgtData.name;
        const inputVal = trgtData.value;

        setUser({
            ...user,
            [inputName]: inputVal,
        });
    };
    const createUser = (e) => {
        e.preventDefault();
        setUser({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",    
        })

    };

    return (
        <div>
            <UserForm inputs={user} handleChange={HandleFormInputs} createUser={createUser}/>
            <InputFieldReflector inputs={user}/>
        </div>
    
    );
};

export default App;


// ```//#region (for PersonCard assign)```        
