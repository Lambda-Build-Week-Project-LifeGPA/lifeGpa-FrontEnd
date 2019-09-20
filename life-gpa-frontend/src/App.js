import React from 'react';
import logo from './logo.svg';
import './App.css';
import HabitSelector from './HabitSelector';
import Habit from './Habit';

function App() {
  return (
    <div className="App">
      <HabitSelector />
      <Habit name="Brush Teeth"/>
    </div>
  );
}

export default App;
