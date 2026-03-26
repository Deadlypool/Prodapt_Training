import React from 'react';
//const Spread = ([name, age, city]) => {}

const Spread = ({...props}) => {
    return (
        <div>
            <h1>Spread operator Example</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>
        </div>
    )
}

export default Spread;