import HotKeys from '../components/dash/HotKeys'
import Graph from '../components/graph/Graph';

import React, { Component} from 'react'

const hotkeys = [
    {id: 1, title: "Day Calories", emoji: "🍱"}, 
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
        graph_data: "BW",
        data: {
            calories_data: [
                {
                  "id": "Daily BMR",
                  "color": "rgb(244,109,67)",
                  "data": [
                    {
                      "x": "Mar 16 21",
                      "y": 1654
                    },
                    {
                      "x": "Mar 17 21",
                      "y": 1635
                    },
                    {
                      "x": "Mar 18 21",
                      "y": 1617
                    },
                    {
                      "x": "Mar 19 21",
                      "y": 1594
                    },
                    {
                      "x": "Mar 20 21",
                      "y": 1625
                    },
                    {
                      "x": "Mar 21 21",
                      "y": 1606
                    },
                    {
                      "x": "Mar 22 21",
                      "y": 1584
                    },
                    {
                      "x": "Mar 23 21",
                      "y": 1606
                    },
                    {
                      "x": "Mar 24 21",
                      "y": 1593
                    },
                    {
                      "x": "Mar 25 21",
                      "y": 158
                    },
                    {
                      "x": "Mar 26 21",
                      "y": 1579
                    },
                    {
                      "x": "Mar 27 21",
                      "y": 1579
                    }
                  ]
                },
                {
                  "id": "Daily Cals",
                  "color": "rgb(160, 34, 2)",
                  "data": [
                    {
                      "x": "Mar 16 21",
                      "y": 1634
                    },
                    {
                      "x": "Mar 17 21",
                      "y": 1509
                    },
                    {
                      "x": "Mar 18 21",
                      "y": 1703
                    },
                    {
                      "x": "Mar 19 21",
                      "y": 1694
                    },
                    {
                      "x": "Mar 20 21",
                      "y": 1725
                    },
                    {
                      "x": "Mar 21 21",
                      "y": 1806
                    },
                    {
                      "x": "Mar 22 21",
                      "y": 1584
                    },
                    {
                      "x": "Mar 23 21",
                      "y": 1606
                    },
                    {
                      "x": "Mar 24 21",
                      "y": 1493
                    },
                    {
                      "x": "Mar 25 21",
                      "y": 168
                    },
                    {
                      "x": "Mar 26 21",
                      "y": 1479
                    },
                    {
                      "x": "Mar 27 21",
                      "y": 1779
                    }
                  ]
                },
              ],
              bw_data: [
              {
                "id": "Daily BW",
                "color": "rgb(244,109,67)",
                "data": [
                  {
                    "x": "Mar 16 21",
                    "y": 165
                  },
                  {
                    "x": "Mar 17 21",
                    "y": 163
                  },
                  {
                    "x": "Mar 18 21",
                    "y": 161
                  },
                  {
                    "x": "Mar 19 21",
                    "y": 159
                  },
                  {
                    "x": "Mar 20 21",
                    "y": 162
                  },
                  {
                    "x": "Mar 21 21",
                    "y": 160
                  },
                  {
                    "x": "Mar 22 21",
                    "y": 158
                  },
                  {
                    "x": "Mar 23 21",
                    "y": 160
                  },
                  {
                    "x": "Mar 24 21",
                    "y": 159
                  },
                  {
                    "x": "Mar 25 21",
                    "y": 158
                  },
                  {
                    "x": "Mar 26 21",
                    "y": 157
                  },
                  {
                    "x": "Mar 27 21",
                    "y": 157
                  }
                ]
              },
              
            ]
        }
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
        
        const { calories_data, bw_data } = this.state.data;

        const data = this.state.graph_data == "BW" ? bw_data : calories_data;

        const top_number = this.state.graph_data == "BW" ? this.state.bw : this.state.bmr;

        return (
            <div className="body-section">

                {this.state.graph_data == "BW"  ? bw_header(top_number) : cals_header(top_number) }

                <div className="graph-container">
                    <Graph data={data} graph_data={this.state.graph_data} />
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
