import HotKeys from '../components/dash/HotKeys'
import Graph from '../components/graph/Graph';
import Calendar from '../components/dash/Calander';
import Slider from '../components/slider/Slider';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import React, { Component} from 'react'

const hotkeys = [
    {id: 1, title: "Squat ", emoji: "🏋🏻‍♂️", slider_name: "SQUAT"}, 
    {id: 2, title: "Bench ", emoji: "🏆", slider_name: "BENCH"},
    {id: 3, title: "Deadlift ", emoji: "🏅", slider_name: "DEAD"},
    {id: 4, title: "Create", emoji: "✍🏼", slider_name: "CREATE"},
];

/**
 * * Graph of BW/Cals Over Time & Push New Data 
 * TODO: 1. Create Data Check Helper Fn
 * TODO: 2. Link Dispatch to Prop & Push Data on Submit
 * TODO: 3. Clean & Delete Usless Code
 * ? Create BW PR here ?
 * @params {graph, body_metrics} = props.body
 */
class Workout extends Component {

    constructor(props) {
        super();

        this.state={
          styleProp: "slide",
          slider_name: "",
          total: props.lifts.total,
          squat: props.lifts.squat,
          bench: props.lifts.bench,
          deadlift: props.lifts.deadlift,
          graph_data: "TOTAL",
          data: props.graph
        }

        this.graphToggle = this.graphToggle.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    graphToggle(text) {
        // console.log("Graph Date: ", text);

        if (this.state.graph_data != text) {
            this.setState({
                graph_data: text
            })
        } 

    }

    handleOpen(slider_type) { 
      // console.log("Handled In parent: ", slider_type);
      this.setState({
        styleProp: "slide-open",
        slider_name: slider_type
      })
    }

    handleClose(slider_type, payload) { 
      console.log("Handled In parent: ", slider_type, " - PayLoad:  ", payload);

      // TODO: 1. ^^^
      // const p = this.checkInput(payload) 
      
      // TODO: 2. ^^^
      // this.props.submitBodyData(slider_type, p)

      this.setState({
        styleProp: "slide"
      })
    }

    render() {

        const top_number = this.state.graph_data == "SQUAT" ? this.state.squat : this.state.graph_data == "BENCH" ? this.state.bench : this.state.graph_data == "DEAD_LIFT" ? this.state.deadlift : this.state.total;

        const { total_list, squat_list, bench_list, styleProp  } = this.state.data;

        const data = this.state.graph_data == "TOTAL" ? total_list : squat_list;

        console.log("Slider-Style: ", this.state.styleProp)
        if (!this.props.firebase.uid) return <Redirect to="/signin" />

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
{/*                 
                <div className="calander-container">
                    <Calendar />
                </div> */}

                <Slider handleClose={this.handleClose}  styleProp={this.state.styleProp} slider_name={this.state.slider_name} /> 

            </div>

        )
    }
}

const mapStateToProps = (state) => {
  return { 
    graph: state.workout.graph,
    lifts: state.workout,
    firebase: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Workout);
