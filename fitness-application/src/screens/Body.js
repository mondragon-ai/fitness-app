import HotKeys from '../components/dash/HotKeys'
import Graph from '../components/graph/Graph';

import React, { Component } from 'react'

const hotkeys = [
    {id: 1, title: "Calories", emoji: "🍱"}, 
    {id: 2, title: "Body Weight", emoji: "🏋🏻‍♀️"},
];

class Body extends Component {

    state={
        bw: 155,
        bw_change: +0.8,
        bmr: 2150
    }

    render() {

        return (
            <div className="body-section">

                <div className="graph-header-text"><h1 className="">{this.state.bw}</h1></div>

                <div className="graph-container">
                    <Graph />
                </div>

                <div className="body-quickstats">

                    <div className="bottom-container">

                        {/* Current BW */}
                        <div className="goals">
                            <div className="stats">
                                <h1>{this.state.bw}</h1>
                                <span>lb</span>
                            </div>
                            <h1>Current Weight</h1>
                        </div>

                        {/* Weight Change */}
                        <div className="streak">
                            <div className="stats">
                                <h1>{this.state.bw_change}</h1>
                                <span>lb</span>
                            </div>
                            <h1>Weight Change</h1>
                        </div>
                        
                        {/* Target Calories */}
                        <div className="date">
                            <div className="stats">
                                <h1>{this.state.bmr}</h1>
                                <span>BMR</span>
                            </div>
                            <h1>Target Calories</h1>
                        </div>
                    </div>
                </div>

                <div className="grid-container">
                    {hotkeys.map( (button) => {
                        return (<HotKeys key={button.id} value={button} />);
                    })}
                </div>

            </div>
        )
    }
}

export default Body;
