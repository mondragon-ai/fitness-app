import HotKeys from '../components/dash/HotKeys'
import Graph from '../components/graph/Graph';
import Slider from '../components/slider/Slider';

import React, { Component} from 'react';
import { connect } from 'react-redux';

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
 * TODO: 1. Create BW Change Helper Fn & Action/Reducer
 * TODO: 2. Create BMR Helper Fn & Action/Reducer
 * TODO: 4. Link Dispatch to Prop & Push Data on Submit
 * TODO: 5. P
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
          data: props.body,
          color: ''
      }

      this.graphToggle = this.graphToggle.bind(this);
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.changeBW = this.changeBW.bind(this);
    }
    
    componentDidMount() {
        this.changeBW(this.props.body.bw_data[0].data )
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

    /**
     * * Take in BW Array & Calculate BW Change 
     * TODO: Clean up
     * ? Stress data array with all data types 
     * ? Create as interface to import?
     * @param { graph.bw_data[0].data } = curr_bw 
     * @return Body Weight Difference: int
     */
    changeBW(bw_arr) 
    {
        let week01 = []
        if (bw_arr.length - 14 > 0) {
            week01 = bw_arr.slice(bw_arr.length - 14, bw_arr.length - 8);
        } else {
            week01 = bw_arr.slice(0, bw_arr.length - 8);
        }
        const week02 = bw_arr.slice(bw_arr.length - 7);

        let week01_sum = 0;
        week01.forEach((obj) => {
            week01_sum+= obj.y
        })

        console.log("\n \n ")
        let week02_sum = 0;
        week02.forEach((obj) => {
            week02_sum+= obj.y
        })

        let week01_avg = week01_sum/week01.length;
        let week02_avg = week02_sum/week02.length;
        let change = week02_avg - week01_avg;


        if (change > 0){
            this.setState({
                bw_change: change.toFixed(1),
                color: 'var(--color-third)'
            }) 
        } else {
            this.setState({
                bw_change: change.toFixed(1),
                color: 'var(--color-accent)'
            }) 
        }
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
                            <div className="stats" >
                                <h1 style={{color: `${this.state.color}`}}>{this.state.bw_change}  </h1>
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

// TODO: 4. Compose lisenter & Add Dispatch/Store to props
export default connect(mapStateToProps)(Body);
