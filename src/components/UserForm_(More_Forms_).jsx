import React from  'react';
    
    
const UserForm = (props) => {
    const {inputs, handleChange, createUser} = props;
    
    return(
        <div>
            <form onSubmit={ createUser} >
                <h3>User Form:</h3>
                <div>
                    <label>First Name: </label> 
                    <input type="text" name="firstName" onChange={handleChange} value = {inputs.firstName} />
                    {inputs.firstName.length >= 3 ? "" : <p style={{color:'red'}}> "Must include at least 3 characters"</p>}
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" name="lastName" onChange={handleChange} value = {inputs.lastName} />
                    <span style={{color:'red'}}><p>{inputs.lastName.length < 3 ? "Must include at least 3 characters" : "" }</p></span>

                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" name="email" onChange={handleChange} value={inputs.email}/>
                    <span style={{color:'red'}}><p> {inputs.email.length < 5 ? "Must include at least 5 characters." : "" }</p></span>

                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={handleChange} value={inputs.password}/>
                    {/* {<span style={{color:'red'}}><p>{inputs.confirmPassword !== inputs.password ? "Passwords must match"  : "" }</p></span>} */}
                    {<span style={{color:'red'}}><p>{inputs.password.length < 8 ? "Must be 8 chars or more"  : "" }</p></span>}                          

                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" name="confirmPassword" onChange={handleChange} value={inputs.confirmPassword}/>
                    {<span style={{color:'red'}}><p>{inputs.confirmPassword !== inputs.password ? "Passwords must match"  : "" }</p></span>}
                    {<span style={{color:'red'}}><p>{inputs.confirmPassword.length < 8 ? "Must be 8 chars or more"  : "" }</p></span>}

                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
    );
};
    
export default UserForm;