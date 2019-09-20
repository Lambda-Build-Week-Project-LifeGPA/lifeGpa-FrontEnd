// imports -- some used some not yet used
import React, { useState } from 'react'
import { Route } from 'react-router-dom' /*to be used for when we are routing the different pages to the dashboard */
// imports of components
import NavBarComponent from './Components/NavBarComponent'
import OverallGPA from './Components/OverallGPA'
import habitCard from './Components/habitCard'
import buttonComponent from './Components/buttonComponent'

const Dashboard = () => {
    const [habitTracker, setHabitTracker ] = usestate( [] )
    const addToHabitTracker = habit => {
        setHabitTracker( [...habitTracker, habit])}

    return (
       <div>
           <NavBarComponent />

            <OverallGPA />
            
            <habitCard/>
            
            <buttonComponent />
            <buttonComponent />
       </div>
        

    )
}