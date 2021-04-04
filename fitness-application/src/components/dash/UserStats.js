import React from 'react'

function UserStats() {
    const level = "Plus Ultra";
    const name = "Angel";
    const progress = 87;
    const usr_profile = '../../usr_profile'
    const goals_left = 3;
    const streak = 7;
    const date = 120;

    return (
        <div className="quick-stats" > 

                <div className="top-container">
                    <img src={usr_profile}/>
                    <div className="name-rank">
                        <h1 className="name-h">Welcome back,<br /> {name}</h1>
                        <p className="rank">Level - {level}</p>
                        <div className="progress-bar">
                            <div className="progress" style={{width: `${progress}%`}}>{progress}%</div>
                        </div>
                    </div>
                </div>

                <div className="bottom-container">
                    <div className="goals">
                        <div className="stats">
                            <h1>{goals_left}</h1>
                            <span>Goals</span>
                        </div>
                        <h1>Goals Left</h1>
                    </div>
                    <div className="streak">
                        <div className="stats">
                            <h1>{streak}</h1>
                            <span>streaks</span>
                        </div>
                        <h1>Log Streak</h1>
                    </div>
                    <div className="date">
                        <div className="stats">
                            <h1>{date}</h1>
                            <span>Days</span>
                        </div>
                        <h1>Next Goal</h1>
                    </div>
                </div>
       
        </div>
    )
}

export default UserStats
