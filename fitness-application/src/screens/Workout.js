import HotKeys from '../components/dash/HotKeys'
import Graph from '../components/graph/Graph';
import Calendar from '../components/dash/Calander';
import Slider from '../components/slider/Slider';

import React, { Component} from 'react'

const hotkeys = [
    {id: 1, title: "Squat PR", emoji: "🏋🏻‍♂️"}, 
    {id: 2, title: "Bench PR", emoji: "🏆"},
    {id: 3, title: "Deadlift PR", emoji: "🏋🏻‍♀"},
    {id: 4, title: "Create Workout", emoji: "✍🏼"},
];

class Workout extends Component {

    constructor() {
        super();

        this.state={
          styleProp: "slide",
          total: 1220,
          squat: 405,
          bench: 315,
          deadlift: 500,
          graph_data: "TOTAL",
          data: {

              total_list: [
                  {
                    "id": "Total Number",
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
                        "y": 1580
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
                    "id": "Squat",
                    "color": "rgb(160, 34, 2)",
                    "data": [
                      {
                        "x": "Mar 16 21",
                        "y": 395
                      },
                      {
                        "x": "Mar 17 21",
                        "y": 405
                      },
                      {
                        "x": "Mar 18 21",
                        "y": 415
                      },
                      {
                        "x": "Mar 19 21",
                        "y": 428
                      },
                      {
                        "x": "Mar 20 21",
                        "y": 434
                      },
                      {
                        "x": "Mar 21 21",
                        "y": 445
                      },
                      {
                        "x": "Mar 22 21",
                        "y": 454
                      },
                      {
                        "x": "Mar 23 21",
                        "y": 469
                      },
                      {
                        "x": "Mar 24 21",
                        "y": 472
                      },
                      {
                        "x": "Mar 25 21",
                        "y": 486
                      },
                      {
                        "x": "Mar 26 21",
                        "y": 495
                      },
                      {
                        "x": "Mar 27 21",
                        "y": 500
                      }
                    ]
                  },
                  {
                      "id": "Deadlift",
                      "color": "rgb(160, 34, 2)",
                      "data": [
                          {
                          "x": "Mar 16 21",
                          "y": 495
                          },
                          {
                          "x": "Mar 17 21",
                          "y": 500
                          },
                          {
                          "x": "Mar 18 21",
                          "y": 510
                          },
                          {
                          "x": "Mar 19 21",
                          "y": 520
                          },
                          {
                          "x": "Mar 20 21",
                          "y": 530
                          },
                          {
                          "x": "Mar 21 21",
                          "y": 540
                          },
                          {
                          "x": "Mar 22 21",
                          "y": 550
                          },
                          {
                          "x": "Mar 23 21",
                          "y": 560
                          },
                          {
                          "x": "Mar 24 21",
                          "y": 570
                          },
                          {
                          "x": "Mar 25 21",
                          "y": 580
                          },
                          {
                          "x": "Mar 26 21",
                          "y": 590
                          },
                          {
                          "x": "Mar 27 21",
                          "y": 600
                          }
                      ]
                  },
                  {
                      "id": "Bench",
                      "color": "rgb(160, 34, 2)",
                      "data": [
                          {
                          "x": "Mar 16 21",
                          "y": 205
                          },
                          {
                          "x": "Mar 17 21",
                          "y": 215
                          },
                          {
                          "x": "Mar 18 21",
                          "y": 229
                          },
                          {
                          "x": "Mar 19 21",
                          "y": 235
                          },
                          {
                          "x": "Mar 20 21",
                          "y": 247
                          },
                          {
                          "x": "Mar 21 21",
                          "y": 259
                          },
                          {
                          "x": "Mar 22 21",
                          "y": 268
                          },
                          {
                          "x": "Mar 23 21",
                          "y": 277
                          },
                          {
                          "x": "Mar 24 21",
                          "y": 287
                          },
                          {
                          "x": "Mar 25 21",
                          "y": 298
                          },
                          {
                          "x": "Mar 26 21",
                          "y": 305
                          },
                          {
                          "x": "Mar 27 21",
                          "y": 315
                          }
                      ]
                  },
              ],

              squat_list: [
                  {
                      "id": "Squat",
                      "color": "rgb(160, 34, 2)",
                      "data": [
                          {
                          "x": "Mar 16 21",
                          "y": 395
                          },
                          {
                          "x": "Mar 17 21",
                          "y": 405
                          },
                          {
                          "x": "Mar 18 21",
                          "y": 415
                          },
                          {
                          "x": "Mar 19 21",
                          "y": 428
                          },
                          {
                          "x": "Mar 20 21",
                          "y": 434
                          },
                          {
                          "x": "Mar 21 21",
                          "y": 445
                          },
                          {
                          "x": "Mar 22 21",
                          "y": 454
                          },
                          {
                          "x": "Mar 23 21",
                          "y": 469
                          },
                          {
                          "x": "Mar 24 21",
                          "y": 472
                          },
                          {
                          "x": "Mar 25 21",
                          "y": 486
                          },
                          {
                          "x": "Mar 26 21",
                          "y": 495
                          },
                          {
                          "x": "Mar 27 21",
                          "y": 500
                          }
                      ]
                  },
                
              ],

              bench_list: [
                  {
                      "id": "Bench",
                      "color": "rgb(160, 34, 2)",
                      "data": [
                          {
                          "x": "Mar 16 21",
                          "y": 205
                          },
                          {
                          "x": "Mar 17 21",
                          "y": 215
                          },
                          {
                          "x": "Mar 18 21",
                          "y": 229
                          },
                          {
                          "x": "Mar 19 21",
                          "y": 235
                          },
                          {
                          "x": "Mar 20 21",
                          "y": 247
                          },
                          {
                          "x": "Mar 21 21",
                          "y": 259
                          },
                          {
                          "x": "Mar 22 21",
                          "y": 268
                          },
                          {
                          "x": "Mar 23 21",
                          "y": 277
                          },
                          {
                          "x": "Mar 24 21",
                          "y": 287
                          },
                          {
                          "x": "Mar 25 21",
                          "y": 298
                          },
                          {
                          "x": "Mar 26 21",
                          "y": 305
                          },
                          {
                          "x": "Mar 27 21",
                          "y": 315
                          }
                      ]
                  },
                
              ],

              deadlift_list: [
                  {
                      "id": "Deadlift",
                      "color": "rgb(160, 34, 2)",
                      "data": [
                          {
                          "x": "Mar 16 21",
                          "y": 495
                          },
                          {
                          "x": "Mar 17 21",
                          "y": 500
                          },
                          {
                          "x": "Mar 18 21",
                          "y": 510
                          },
                          {
                          "x": "Mar 19 21",
                          "y": 520
                          },
                          {
                          "x": "Mar 20 21",
                          "y": 530
                          },
                          {
                          "x": "Mar 21 21",
                          "y": 540
                          },
                          {
                          "x": "Mar 22 21",
                          "y": 550
                          },
                          {
                          "x": "Mar 23 21",
                          "y": 560
                          },
                          {
                          "x": "Mar 24 21",
                          "y": 570
                          },
                          {
                          "x": "Mar 25 21",
                          "y": 580
                          },
                          {
                          "x": "Mar 26 21",
                          "y": 590
                          },
                          {
                          "x": "Mar 27 21",
                          "y": 600
                          }
                      ]
                  },
                
              ]
          }
        }

        this.graphToggle = this.graphToggle.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    graphToggle(text) {
        console.log("Graph Date: ", text);

        if (this.state.graph_data != text) {
            this.setState({
                graph_data: text
            })
        } 

    }

    handleOpen(title) { 
      console.log("Handled In parent: ", title)
      this.setState({
        styleProp: "slide-open"
      })
    }

    render() {

        const top_number = this.state.graph_data == "SQUAT" ? this.state.squat : this.state.graph_data == "BENCH" ? this.state.bench : this.state.graph_data == "DEAD_LIFT" ? this.state.deadlift : this.state.total;

        const { total_list, squat_list, bench_list, styleProp  } = this.state.data;

        const data = this.state.graph_data == "TOTAL" ? total_list : squat_list;

        console.log("Slider-Style: ", this.state.styleProp)

        return (

            <div className="body-section">

                <div className="graph-header-text"><h1 className="">{top_number}</h1><span>lbs</span></div>

                <div className="graph-container">

                    <Graph data={data} graph_data={this.state.graph_data} />
              
                </div>

                <div className="body-quickstats">

                    <div className="bottom-container">

                        {/* Total Weight */}
                        <div className="goals" onClick={(e) => this.graphToggle("TOTAL")}>
                            <div className="stats">
                                <h1>{this.state.total}</h1>
                                <span>lb</span>
                            </div>
                            <h1>Total Weight</h1>
                        </div>

                        {/* Squat PR */}
                        <div className="streak" onClick={() => this.graphToggle("SQUAT")}>
                            <div className="stats">
                                <h1>{this.state.squat}</h1>
                                <span>lb</span>
                            </div>
                            <h1>Squat PR</h1>
                        </div>
                    </div>

                    <div className="bottom-container">
                        {/* Deadlift PR */}
                        <div className="date" onClick={() => this.graphToggle("DEAD_LIFT")}>
                            <div className="stats">
                                <h1>{this.state.deadlift}</h1>
                                <span>lb</span>
                            </div>
                            <h1>Deadlift PR</h1>
                        </div>

                        {/* Bench PR */}
                        <div className="date" onClick={() => this.graphToggle("BENCH")}>
                            <div className="stats">
                                <h1>{this.state.bench}</h1>
                                <span>lb</span>
                            </div>
                            <h1>Bench PR</h1>
                        </div>
                    </div>
                
                </div>

                <div className="grid-container">

                    {hotkeys.map( (button) => {
                        return (<HotKeys handleOpen={this.handleOpen} key={button.id} value={button} />);
                    })}

                </div>
                
                <div className="calander-container">
                    <Calendar />
                </div>

                <Slider styleProp={this.state.styleProp} /> 

            </div>

        )
    }
}

export default Workout;
