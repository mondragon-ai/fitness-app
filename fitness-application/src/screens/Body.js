import HotKeys from '../components/dash/HotKeys'
import Graph from '../components/graph/Graph';
import Slider from '../components/slider/Slider';

import React, { Component} from 'react';
import { connect } from 'react-redux';
import { addBWAction } from '../store/actions/bodyAction';

// * For HotKey & Action
const hotkeys = [
    {id: 1, title: "Daily Calories", emoji: "🍱", slider_name: "CALS"}, 
    {id: 2, title: "Body Weight", emoji: "🏋🏻‍♀️", slider_name: "BODY"},
];

// * Dynamic str label based on data
const bw_header = (top_number) => {return (<div className="graph-header-text"><h1 className="">{top_number}</h1><span>lbs</span></div> ) } 
const cals_header = (top_number) => {return (<div className="graph-header-text"><h1 className="">{top_number}</h1><span>kcal</span></div> ) } 

/**
 * * Graph of BW/Cals Over Time & Push New Data 
 * TODO: 1. Create BW Change Helper Fn
 * TODO: 2. Create BMR Helper Fn
 * TODO: 3. Create Data Check Helper Fn
 * TODO: 4. Link Dispatch to Prop & Push Data on Submit
 * TODO: 5. Clean
 * @params {graph, body_metrics} = props.body
 */
class Body extends Component {
    
    constructor(props) {
        super();
        // BW Array
        const bw_data = props.body.bw_data[0].data;;
        const prev_bw = bw_data[bw_data.length - 1].y;

        // Calorie Array
        const cal_data = props.body.calories_data[0].data;
        const prev_cal = cal_data[cal_data.length - 1].y;

        // TODO: 1.
        const change = prev_bw - bw_data[bw_data.length - 2].y + 0.24;
        
        // TODO: 2.
        // const week01 = bw_data.slice(0, bw_data.length - 8);
        // const week02 = bw_data.slice(bw_data.length - 7);

        this.state = {
          styleProp: "slide",
          slider_name: "",
          graph_data: "BW",
          bw: prev_bw, 
          bw_change: change, 
          bmr: prev_cal,
          calories: prev_cal,
          data: props.body
      }

      this.graphToggle = this.graphToggle.bind(this);
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);

    }
    

    // * Toggle Graph Data based on selected data
    graphToggle(text) {

        if (this.state.graph_data != text) {
            this.setState({
                graph_data: text
            })
        } 

    }

    // * Open Slide & Change syle: slide-open
    handleOpen(slider_type) 
    { 
      this.setState({
        styleProp: "slide-open",
        slider_name: `${slider_type}`
      })
    }

    // * Open Slide & Change syle: slide & Handle Push to DB
    handleClose(slider_type, payload) 
    { 
      console.log("Handled In parent: ", slider_type, " - PayLoad:  ", payload)

      // TODO: 3. ^^^
      // const p = this.checkInput(payload) 
      
      // TODO: 4. ^^^
      // this.props.submitBodyData(slider_type, p)
      

      this.setState({
        styleProp: "slide",
        slider_name: ""
      })
    }

    render() {

        // * Display Daya & label based on selected data
        const data = this.state.graph_data == "BW" ? this.state.data.bw_data : this.state.data.calories_data;
        const top_number = this.state.graph_data == "BW" ? this.state.bw : this.state.bmr;
        // const { calories_data, bw_data } = this.state.data;

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

// * Mapping Boday Data to Props
const mapStateToProps = (state) => {
  return { body: state.body.graph }
}

// * Mapping Dispatched Actions  to Props
const mapDispatchToState = (dispatch) => {
    return { 
        add_bw: (bw) => dispatch(addBWAction(bw)),
    }
  }
  

// TODO: 4. Compose lisenter & Add Dispatch/Store to props
export default connect(mapStateToProps, mapDispatchToState)(Body);
