import React, { Component } from 'react';
import Search from '../Search'
import NewPR from './NewPR'


class Slider extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            id: 2,
            bw_pr: 500,
            ppr: 405,
            style: this.props.styleProp,
            open: false
        }

        console.log('Slider-Style (SLIDER):', this.props);

        this.closeSlide = this.closeSlide.bind(this);
    }

    selectedSearch = (item) => {

        console.log('Parent: ', item);

    }

    componentDidUpdate() {
        console.log('Slider-Style (SLIDER):', this.props);
        if (this.state.open == false) {
            this.setState({
                style: this.props.styleProp,
                open: true
            });
        }
    }

    closeSlide = () => {

        console.log('\'Close Slide\': < Slider />');
        this.setState({style:"slide"});

    }

    render() {

        return (
            <div className={this.state.style}>
    
                {/* Header */}
                <div className="slider-header">
                    <div onClick={() => this.closeSlide()} className=""></div>
                </div>
    
                {/* Search 
                <Search searchFn={(item) => selectedSearch(item)} /> */}
    
                {/* Header */}
                <div className="slider-container">
                    <NewPR values={this.state} />
                </div>
    
                {/* Flow Form */}
    
            </div>
        )
    }

}

export default Slider;