import React from 'react';

const HabitButtton = (props) => {
    
    return (
        <button onClick={(e) => props.stat(true)}>{props.text}</button>
    )
}

export default HabitButtton;