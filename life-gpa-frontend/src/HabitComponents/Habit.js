import React, { useState } from 'react';

const Habit = (props) => {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);
    const [average, setAverage] = useState();
    const completed = () => {
        setNumber(number + 1)
        setCount(count + 1)
        return true
    }
    const notCompleted = () => {
        setCount(count + 1)
        return false
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
            <h3>Completions: {number}</h3>
            <h3>Days:{count}</h3>
            <h3>Score: {average}</h3>
        </div>
    )
}
export default Habit;