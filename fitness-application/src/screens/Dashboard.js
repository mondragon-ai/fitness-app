
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

    return (
        <div>
            <UserStats /> 

            <div className="grid-container">
                {hotkeys.map( (button) => {
                    return (<HotKeys key={button.id} value={button} />);
                })}
            </div>

            <div className="calander-container">
                <Calander />
            </div>
            
            
        </div>
    )
}

export default Dashboard
