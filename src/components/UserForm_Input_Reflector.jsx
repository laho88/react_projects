import React from "react";

const InputFieldReflector = (props) => {
    const {inputs} = props;

    return(
        <div>
            <h4>See it happen live:</h4>
            <p>User First Name: {inputs.firstName}</p>
            <p>User Last Name: {inputs.lastName}</p>
            <p>Email: {inputs.email}</p>
            <p>Password: {inputs.password}</p>
            <p>Check Password: {inputs.checkPassword}</p>
        </div>
    )

}

export default InputFieldReflector;