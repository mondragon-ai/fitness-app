
import UserStats from '../components/dash/UserStats';
import HotKeys from '../components/dash/HotKeys';
import Calander from '../components/dash/Calander';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react'

const Dashboard = (props) => {
    const hotkeys = [
        {id: 1, title: "Workout", emoji: "✍🏼", to: "/workout", type: "CREATE" }, 
        {id: 2, title: "Add PR", emoji: "🏋🏻‍♀️", to: "/workout", type: "NONE" },
        {id: 3, title: "Add Body", emoji: "🌮", to: "/body", type: "OPEN" },
        {id: 4, title: "Add Post", emoji: "📸", to: "/profile", type: "NONE" },
    ];

    const quickStats = [
        {id: 1, title: "Goals Left", subtitle: "Goals"}, 
        {id: 2, title: "Streak", subtitle: "Streaks"},
        {id: 3, title: "Next Goal", subtitle: "Days"}, 
    ];

    function handleOpen(title) 
    { 
        console.log("Handled In parent: ", title)
    }

    if (!props.firebase.uid) {
        return <Redirect to="/signin" />
    } else {
        return (
            <div>
                <UserStats user_info={props.user_info} value={quickStats} /> 
    
                <div className="grid-container">
                    {hotkeys.map( (button) => {
                        return (
                        <Link to={button.to} >
                            <HotKeys handleOpen={() => handleOpen()} key={button.id} value={button} />
                        </Link>
                        );
                    })}
                </div>
    
                {/* <div className="calander-container">
                    <Calander />
                </div> */}
                
                
            </div>
        )
    }
}

const maptStateToProps = (state) => {
    console.log(state)
    return { 
        user_info: state.auth,
        firebase: state.firebase.auth
    }
}

export default connect(maptStateToProps)(Dashboard)
