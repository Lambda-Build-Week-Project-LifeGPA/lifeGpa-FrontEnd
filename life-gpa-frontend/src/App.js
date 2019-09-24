
import React from 'react';
import './App.css';
import HabitSelector from './HabitComponents/HabitSelector';
import {Route, NavLink} from 'react-router-dom'
import Login from './Login component/Login';
import SignUp from './SignUp component/SignUp';
import PrivateRoute from './Login component/PrivateRoute';


function App() {

  return (
    <div className="App">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/login'}>Login</NavLink>
      <NavLink to={'/signup'}>Sign Up</NavLink>
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/signup' component = {SignUp} />
        <PrivateRoute exact path = '/habits' component = {HabitSelector}/>
    </div>
  );
}

export default App;
