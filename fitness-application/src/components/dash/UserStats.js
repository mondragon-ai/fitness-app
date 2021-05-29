import React from 'react'
import img from '../../assets/media/user-img.png'


/**
 * ! Only Import Data from User, UID Auth, 
 * ? import interface or create helper fn to calculate #s & level
 * TODO: 1. Import react/reduc/firebase malware
 * TODO: 2. Map to state 
 * TODO: 3. Compose & connect as prop from reducer and firestoreConnect()
 * TODO: 4. Import reducer state
 * @param { value }  = props 
 * @returns UserStats jsx for profiel or dash
 */

const UserStats = (props) => {

    const state = {
        level: "Plus Ultra",
        name: "Angel",
        progress: 87,
        usr_profile: img,
        goals_left: 3,
        streak: 7,
        date: 120,
        url_param: 'dash'
    }

    const { value } = props

    console.log(value)

    return (
        <div className="quick-stats" > 

                <div className="top-container">
                    <img src={state.usr_profile}/>
                    <div className="name-rank">
                        <h1 className="name-h">Welcome Back,<br /> {state.name}</h1>
                        <p className="rank"><span>Level -</span> {state.level}</p>
                        <div className="progress-bar">
                            <div className="progress" style={{width: `${state.progress}%`}}>{state.progress}%</div>
                        </div>
                    </div>
                </div>

                <div className="bottom-container">
                    <div className="goals">
                        <div className="stats">
                            <h1>{state.goals_left}</h1>
                            <span>{value[0].subtitle}</span>
                        </div>
                        <h1>{value[0].title}</h1>
                    </div>
                    <div className="streak">
                        <div className="stats">
                            <h1>{state.streak}</h1>
                            <span>{value[1].subtitle}</span>
                        </div>
                        <h1>{value[1].title}</h1>
                    </div>
                    <div className="date">
                        <div className="stats">
                            <h1>{state.date}</h1>
                            <span>{value[2].subtitle}</span>
                        </div>
                        <h1>{value[2].title}</h1>
                    </div>
                </div>
       
        </div>
    )
}



export default UserStats
