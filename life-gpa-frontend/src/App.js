import React from 'react';
import './App.css';
import HabitSelector from './HabitSelector';
import Habit from './Habit';
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
      <Habit name="Brush Teeth"/>
    </div>
  );
}

export default App;
