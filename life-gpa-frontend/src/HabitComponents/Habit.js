import React, { useState } from 'react';
import Navigation from '../Dashboard/Components/Nav' 
import styled from 'styled-components';

const CustomButton = styled.button`
    background: #e0e1e2;
    color: rgba(0, 0, 0, .6);
    padding: 8px 15px;
    border-radius: 5px;
    border-style:none;
    margin: 10px 5px;
    font-size: 1.4rem
`

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
            <Navigation />
            <div>
                <h3>{props.name}</h3>
                <CustomButton onClick={completed}>Yes</CustomButton>
                <CustomButton onClick={notCompleted}>No</CustomButton>
                <CustomButton onClick={averages}>Get average</CustomButton>
                <h3>Completions: {number}</h3>
                <h3>Days:{count}</h3>
                <h3>Score: {average}</h3>
            </div>
        </div>
    )
}
export default Habit;