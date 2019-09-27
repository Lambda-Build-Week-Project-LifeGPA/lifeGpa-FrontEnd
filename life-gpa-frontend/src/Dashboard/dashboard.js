// imports -- some used some not yet used
import React, { useState } from 'react'
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';


// import { Route } from 'react-router-dom' /*to be used for when we are routing the different pages to the dashboard */
// imports of components
import HabitSelector from '../HabitComponents/HabitSelector'
import Habits from './Components/habitCard'


const Dashboard = () => {

    const [habitTracker, setHabitTracker ] = useState( {
        habit: {
            name : 'Ride bike'
        }
    } )
    

    return (
       <div className='dashboard'>

         <HabitSelector />
            <Habits/>
            
           
       </div>
        

    )
}

export default Dashboard;


// ReactDOM.render(
//     <Router>
//         <Dashboard />
//     </Router>, 
//     document.getElementById('root')
// );