import React from 'react'

function UserStats(props) {
    const level = "Plus Ultra";
    const name = "Angel";
    const progress = 87;
    const usr_profile = '../../usr_profile'
    const goals_left = 3;
    const streak = 7;
    const date = 120;

    const { value } = props

    console.log(value)

    return (
        <div className="quick-stats" > 

                <div className="top-container">
                    <img src={usr_profile}/>
                    <div className="name-rank">
                        <h1 className="name-h">Welcome back,<br /> {name}</h1>
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
