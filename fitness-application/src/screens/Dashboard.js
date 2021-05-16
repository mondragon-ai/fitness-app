
import UserStats from '../components/dash/UserStats'
import HotKeys from '../components/dash/HotKeys'
import Calander from '../components/dash/Calander'

import React from 'react'

const Dashboard = () => {
    const hotkeys = [
        {id: 1, title: "Add Workout", emoji: "🦄"}, 
        {id: 2, title: "Add PR", emoji: "🏋🏻‍♀️"},
        {id: 3, title: "Add Body", emoji: "🦄"}, 
        {id: 4, title: "Add Post", emoji: "🏋🏻‍♀️"},
    ];

    const quickStats = [
        {id: 1, title: "Goals Left", subtitle: "Goals"}, 
        {id: 2, title: "Streak", subtitle: "Streaks"},
        {id: 3, title: "Next Goal", subtitle: "Days"}, 
    ];

    return (
        <div>
            <UserStats value={quickStats} /> 

            <div className="grid-container">
                {hotkeys.map( (button) => {
                    return (<HotKeys key={button.id} value={button} />);
                })}
            </div>

            {/* <div className="calander-container">
                <Calander />
            </div> */}
            
            
        </div>
    )
}

export default Dashboard
