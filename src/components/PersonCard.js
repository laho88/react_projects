import React from "react";

//convert this to a functional component.
const PersonCard = (props) => {
    return(
        <div>
            <h3>{props.lastName}, {props.firstName}</h3>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
};
export default PersonCard;
