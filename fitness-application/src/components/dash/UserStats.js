import React from 'react'
// import img from '../../assets/media/user-img.png'


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

const UserStats = ({ value, user_info}) => {

    const state = {
        url_param: 'dash'
    }

    // const { value } = props
    const { level, name, progress, usr_profile, goals_left, streak, date } = user_info

    console.log(value)

    return (
        <div className="quick-stats" > 

                <div className="top-container">
                    <img src={usr_profile}/>
                    <div className="name-rank">
                        <h1 className="name-h">Welcome Back,<br /> {name}</h1>
                        <p className="rank"><span>Level -</span> {level}</p>
                        <div className="progress-bar">
                            <div className="progress" style={{width: `${progress}%`}}>{progress}%</div>
                        </div>
                    </div>
                </div>

                <div className="bottom-container">
                    <div className="goals">
                        <div className="stats">
                            <h1>{goals_left}</h1>
                            <span>{value[0].subtitle}</span>
                        </div>
                        <h1>{value[0].title}</h1>
                    </div>
                    <div className="streak">
                        <div className="stats">
                            <h1>{streak}</h1>
                            <span>{value[1].subtitle}</span>
                        </div>
                        <h1>{value[1].title}</h1>
                    </div>
                    <div className="date">
                        <div className="stats">
                            <h1>{date}</h1>
                            <span>{value[2].subtitle}</span>
                        </div>
                        <h1>{value[2].title}</h1>
                    </div>
                </div>
       
        </div>
    )
}

export default UserStats
