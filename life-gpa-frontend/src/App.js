import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HabitSelector from './Components/HabitSelector';
import Habit from './Components/Habit';
import HabitButton from './Components/HabitButton';
import CancelButton from './Components/CancelButton';
import styled from 'styled-components';
import CustomHabitSelector from './Components/CustomHabitSelector';

function App() {

  return (
    <div className="App">
      <HabitSelector />
      {/* <CustomHabitSelector /> */}
    </div>
  );
}

export default App;
