import HotKeys from '../components/dash/HotKeys'
import Graph from '../components/graph/Graph';
import Slider from '../components/slider/Slider';

import React, { Component} from 'react'
import { connect } from 'react-redux';

const hotkeys = [
    {id: 1, title: "Daily Calories", emoji: "🍱", slider_name: "CALS"}, 
    {id: 2, title: "Body Weight", emoji: "🏋🏻‍♀️", slider_name: "BODY"},
];


const bw_header = (top_number) => {return (<div className="graph-header-text"><h1 className="">{top_number}</h1><span>lbs</span></div> ) } 
const cals_header = (top_number) => {return (<div className="graph-header-text"><h1 className="">{top_number}</h1><span>kcal</span></div> ) } 



/**
 * * Graph of BW/Cals Over Time & Push New Data 
 * TODO: 1. Create BW Change Helper Fn
 * TODO: 2. Create BMR Helper Fn
 * TODO: 3. Create Data Check Helper Fn
 * TODO: 4. Link Dispatch to Prop & Push Data on Submit
 * @params {graph, body_metrics} = props.body
 */
class Body extends Component {
    
    constructor(props) {
        super();

        const bw_data = props.body.bw_data[0].data;;
        const prev_bw = bw_data[bw_data.length - 1].y;
        const change = prev_bw - bw_data[bw_data.length - 2].y + 0.24;

        const week01 = bw_data.slice(0, bw_data.length - 8);
        const week02 = bw_data.slice(bw_data.length - 7);

        const cal_data = props.body.calories_data[0].data;
        const prev_cal = cal_data[cal_data.length - 1].y;

        console.log(bw_data)
        console.log(week01)
        console.log(week02)
        this.state={
          styleProp: "slide",
          slider_name: "BODY",
          graph_data: "BW",
          bw: prev_bw, //155,
          bw_change: change, //+0.8,
          bmr: prev_cal,
          calories: prev_cal,
          data: props.body
      }

      this.graphToggle = this.graphToggle.bind(this);
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);

    }
    

    graphToggle(text) {
        console.log("Graph Date: ", text);

        if (this.state.graph_data != text) {
            this.setState({
                graph_data: text
            })
        } 

    }

    handleOpen(slider_type) { 
      // console.log("Handled In parent: ", slider_type)
      this.setState({
        styleProp: "slide-open",
        slider_name: `${slider_type}`
      })
    }

    handleClose(slider_type, payload) { 
      console.log("Handled In parent: ", slider_type, " - PayLoad:  ", payload)

      // const p = this.checkInput(payload) 
      
      // this.props.submitBodyData(slider_type, p)

      // TODO: 3. 
      this.setState({
        styleProp: "slide",
      })
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
                                <h1>{this.state.bw} </h1>
                                <span> lb</span>
                            </div>
                            <h1>Current Weight</h1>
                        </div>

                        {/* Weight Change */}
                        <div className="streak" onClick={() => this.graphToggle("BW")}>
                            <div className="stats">
                                <h1>{this.state.bw_change}  </h1>
                                <span>  lb</span>
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
                        return (<HotKeys handleOpen={this.handleOpen} key={button.id} value={button} />);
                    })}
                </div>

                <Slider handleClose={this.handleClose}  styleProp={this.state.styleProp} slider_name={this.state.slider_name} /> 

            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return { body: state.body.graph }
}

export default connect(mapStateToProps)(Body);
