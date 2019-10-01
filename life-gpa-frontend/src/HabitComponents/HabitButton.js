import React from 'react';
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

const HabitButtton = (props) => {
    
    return (
        <CustomButton onClick={(e) => props.stat(true)}>{props.text}</CustomButton>
    )
}

export default HabitButtton;