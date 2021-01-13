import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };

        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    };
    
    return(
        <div>
            <form onSubmit={ createUser}  >
                <h3>User Form:</h3>
                <div>
                    <label>First Name: </label> 
                    <input type="text" name="firstName" onChange={ (e) => setFirstName(e.target.value) } value = {firstName} />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" name="lastName" onChange={ (e) => setLastName(e.target.value) } value = {lastName} />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" name="email" onChange={ (e) => setEmail(e.target.value) } value={email}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={ (e) => setPassword(e.target.value) } value={password}/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" name="confirmPassword" onChange={ (e) => setConfirmPassword(e.target.value) } value={confirmPassword}/>
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h4>See it happen live:</h4>
                <p>User First Name: {firstName}</p>
                <p>User Last Name: {lastName}</p>
                <p>Email: {email}</p>

            </div>

        </div>
    );
};
    
export default UserForm;