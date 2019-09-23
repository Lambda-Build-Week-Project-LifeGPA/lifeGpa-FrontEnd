
import React, { useState } from 'react';
import './App.css';
import HabitSelector from './Components/HabitSelector';
import Habit from './Components/Habit';
import HabitButton from './Components/HabitButton';
import CancelButton from './Components/CancelButton';
import styled from 'styled-components';
import CustomHabitSelector from './Components/CustomHabitSelector';


import {Route, NavLink} from 'react-router-dom'
import Login from './Login component/Login';
import SignUp from './SignUp component/SignUp';


function App() {

  return (
    <div className="App">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/login'}>Login</NavLink>
      <NavLink to={'/signup'}>Sign Up</NavLink>
     
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/signup' component = {SignUp} />

      <HabitSelector />
      {/* <CustomHabitSelector /> */}
    </div>
  );
}

export default App;
