import HotKeys from '../components/dash/HotKeys'
import Graph from '../components/graph/Graph';

import React, { Component} from 'react'

const hotkeys = [
    {id: 1, title: "Calories", emoji: "🍱"}, 
    {id: 2, title: "Body Weight", emoji: "🏋🏻‍♀️"},
];

const bw_header = (top_number) => {return (<div className="graph-header-text"><h1 className="">{top_number}</h1><span>lbs</span></div> ) } 
const cals_header = (top_number) => {return (<div className="graph-header-text"><h1 className="">{top_number}</h1><span>kcal</span></div> ) } 

class Body extends Component {

    constructor() {
        super();
        this.graphToggle = this.graphToggle.bind(this);
    }

    state={
        bw: 155,
        bw_change: +0.8,
        bmr: 2150,
        graph_data: "BW"
    }

    graphToggle(text) {
        console.log("Graph Date: ", text);

        if (this.state.graph_data != text) {
            this.setState({
                graph_data: text
            })
        } 

    }

    render() {

        const top_number = this.state.graph_data == "BW" ? this.state.bw : this.state.bmr;

        return (
            <div className="body-section">

                {this.state.graph_data == "BW"  ? bw_header(top_number) : cals_header(top_number) }

                <div className="graph-container">
                    <Graph graph_data={this.state.graph_data} />
                </div>

                <div className="body-quickstats">

                    <div className="bottom-container">

                        {/* Current BW */}
                        <div className="goals" onClick={(e) => this.graphToggle("BW")}>
                            <div className="stats">
                                <h1>{this.state.bw}</h1>
                                <span>lb</span>
                            </div>
                            <h1>Current Weight</h1>
                        </div>

                        {/* Weight Change */}
                        <div className="streak" onClick={() => this.graphToggle("BW")}>
                            <div className="stats">
                                <h1>{this.state.bw_change}</h1>
                                <span>lb</span>
                            </div>
                            <h1>Weight Change</h1>
                        </div>
                        
                        {/* Target Calories */}
                        <div className="date" onClick={() => this.graphToggle("CALORIES")}>
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
