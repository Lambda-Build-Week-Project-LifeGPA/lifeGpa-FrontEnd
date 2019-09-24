import React, { useState } from 'react';

const Habit = (props) => {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);
    const [average, setAverage] = useState();
    const completed = () => {
        setNumber(number + 1)
        setCount(count + 1)
    }
    const notCompleted = () => {
        setCount(count + 1)
    }

    const averages = () => {
        setAverage(number / count)
    }
    return (
        <div key={props.key}>
            <h3>{props.name}</h3>
            <button onClick={completed}>Yes</button>
            <button onClick={notCompleted}>No</button>
            <button onClick={averages}>Get average</button>
            <h1>Completions: {number}</h1>
            <h1>Days:{count}</h1>
            <h1>Score: {average}</h1>
        </div>
    )
}
export default Habit;