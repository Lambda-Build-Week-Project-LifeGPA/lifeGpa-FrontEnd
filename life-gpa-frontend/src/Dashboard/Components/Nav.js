import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Log from '../../../src/img/log.png'

const CustomButton = styled.button`
    background: black;
    color: white;
    padding: 8px 15px;
    border: 1px solid white;
    border-radius: 5px;
    margin: 10px 0;
    font-size: 1.4rem;
`
const CustomDiv = styled.div`
    // margin: 5px 0 15px 0 ;
    border-bottom: 1px solid lightgrey;
    display: flex;
    background-color: black
`

const Navigation = () => {
    return (
        <CustomDiv>
            <img src={Log} style={{width: "75px", height: "75px", margin: "10px 10px"}}/>
            <Link to='/dashboard/habit'>
                <CustomButton>Home</CustomButton>
            </Link>
            <Link to='/dashboard/habits'>
                <CustomButton>Habits</CustomButton>
            </Link>
            <Link to=''>
                <CustomButton>About</CustomButton>
            </Link>
        </CustomDiv>
    )
}

export default Navigation;