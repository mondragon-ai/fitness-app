import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import Search from '../Search'
import NewSquat from './NewSquat'
import NewBench from './NewBench'
import NewDead from './NewDead'
import NewBody from './NewBody'
import NewCals from './NewCals'



/**
 * TODO: 1. Link to Store 
 * TODO: 2. Assing keys to vlaues dynamically from Store [ln - 1] 
 * @param {body_metrics, workout_tracking} = props
 * */
 class Slider extends Component {

    constructor(props) {
        super()

        this.state = {

            id: 2,
            d_bw_pr: 640,
            d_ppr: 600,
            b_bw_pr: 350,
            b_ppr: 300,
            s_bw_pr: 500,
            s_ppr: 405,
            style: "slide",
            slider_name: "BODY",
            open: false

        }

        this.closeSlide = this.closeSlide.bind(this);
        // this.closeSlide = this.props.handleClose().bind(this)
    }

    selectedSearch = (item) => {

        console.log('Parent: ', item);

    }

    closeSlide(payload){
        // console.log( `\n\n ${this.props.slider_name} CLOSED`)
        this.props.handleClose(this.props.slider_name, payload)

    }

    render() {

        return (
            <div className={this.props.styleProp}>
    
                {/* Header */}
                <div className="slider-header">
                    <div onClick={() => this.closeSlide()} className=""></div>
                </div>
    
                {/* Search TODO
                <Search searchFn={(item) => selectedSearch(item)} /> */}
    
                {/* Header */}
                <div className="slider-container">
                    { 
                        this.props.slider_name == "BODY" ? <NewBody close={this.closeSlide}  values={this.state} />  : 
                        this.props.slider_name == "CALS" ? <NewCals close={this.closeSlide} values={this.state} /> :
                        this.props.slider_name == "SQUAT" ?  <NewSquat  close={this.closeSlide} values={this.state} />  : 
                        this.props.slider_name == "BENCH" ? <NewBench  close={this.closeSlide} values={this.state} />  :
                        this.props.slider_name == "DEAD" ? <NewDead  close={this.closeSlide} values={this.state} />  :
                        this.props.slider_name == "CREATE" ? null : null
                    }
                </div>

                {/* Flow Form */}
    
            </div>
        )
    }

}

export default Slider;