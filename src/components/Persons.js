import React from 'react';

const Persons = (props) => {
    const {firstName, lastName, age, hairColor} = props;

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair: {hairColor}</p>
        </div>
    )
}

export default Persons;