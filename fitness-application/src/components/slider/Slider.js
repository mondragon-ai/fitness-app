import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import Search from '../Search'
import NewSquat from './NewSquat'
import NewBench from './NewBench'
import NewDead from './NewDead'
import NewBody from './NewBody'
import NewCals from './NewCals'


class Slider extends Component {

    constructor(props) {
        super()

        this.state = {

            id: 2,
            prev_bw: 161,
            target_bw: 162,
            prev_cal: 2161,
            target_BMR: 1682,
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

    // componentDidUpdate() {
    //     console.log('Slider-Style (SLIDER):', this.props);
    //     if (this.state.open == false) {
    //         this.setState({
    //             style: this.props.styleProp,
    //             open: true
    //         });
    //     }
    // }

    closeSlide(){
        console.log( `\n\n ${this.props.slider_name} CLOSED`)
        this.props.handleClose(this.props.slider_name)
    }

    render() {

        return (
            <div className={this.props.styleProp}>
    
                {/* Header */}
                <div className="slider-header">
                    <div onClick={() => this.closeSlide()} className=""></div>
                </div>
    
                {/* Search 
                <Search searchFn={(item) => selectedSearch(item)} /> */}
    
                {/* Header */}
                <div className="slider-container">
                    { 
                        this.props.slider_name == "BODY" ? <NewBody values={this.state} />  : 
                        this.props.slider_name == "CALS" ? <NewCals values={this.state} /> :
                        this.props.slider_name == "SQUAT" ?  <NewSquat values={this.state} />  : 
                        this.props.slider_name == "BENCH" ? <NewBench values={this.state} />  :
                        this.props.slider_name == "DEAD" ? <NewDead values={this.state} />  :
                        this.props.slider_name == "CREATE" ? null : null
                    }
                </div>
    
                {/* Flow Form */}
    
            </div>
        )
    }

}

export default Slider;