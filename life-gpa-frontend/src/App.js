
import React from 'react';
import './App.css';

import {Route, NavLink} from 'react-router-dom'
import Login from './Login component/Login';
import SignUp from './SignUp component/SignUp';
import PrivateRoute from './Login component/PrivateRoute';
import Dashboard from './Dashboard/dashboard';
import Home from './Home page/Home';
import HabitSelector from './HabitComponents/HabitSelector';
import Habit from './HabitComponents/Habit';

function App() {
  return (
    <div className="App">

      
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/signup' component = {SignUp} />
        <Route path='/dashboard/habit' component={HabitSelector} />
        <Route path='/dashboard/habits' component={Habit} />
        <PrivateRoute exact path = '/dashboard' component = {Dashboard}/>

    </div>
  );
}

export default App;
