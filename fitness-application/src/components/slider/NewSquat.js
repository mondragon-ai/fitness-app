import React, { Component } from 'react'
import { connect } from 'react-redux';


class NewSquat extends Component {


    constructor(props) 
    {
        super();

        this.calculatePR(props.body.current_bw) 

        this.state = {
            value: '',
            s_bw_pr: 0
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.calculatePR = this.calculatePR.bind(this);
    }

    // Calculate PR
    calculatePR(bw) 
    {
        if (bw) {
            const pr = bw*3
            this.setState({
            s_bw_pr: pr
            })
        } else {
            this.setState({
            s_bw_pr: this.props.body.current_bw
            })
        }
    }

    componentDidMount() 
    {
        this.calculatePR(this.props.body.current_bw) 
        console.log("NEW SQUAT PR: ", this.props.body.current_bw)
    }
    
    /**
     * Handle Change
     * @param {*} event 
     */
    handleChange(event) { this.setState({value: event.target.value}); }

    /**
     * Pass Data to Parent for data check & 
     * ? Data Check here? 
     * @param {*} event 
     */
    handleSubmit(event) 
    {
    event.preventDefault();
    this.props.close(this.state.value)
    }

    render() {

        const { s_ppr } = this.props.body

        return (

            <form onSubmit={this.handleSubmit} className="slider-pr">
    
                <div className="new-pr">
                    <div className="pr-item">
                        <input type="text" placeholder="405" onChange={this.handleChange} value={this.state.value} />
                    </div>
    
                    <div className="pr-item ">
                        <h1>{s_ppr}<p>Lbs</p></h1>
                        <p>Current PR</p>
                    </div>
                    
                    <div className="pr-item">
                        <h1>{this.state.s_bw_pr}<p>Lbs</p></h1>
                        <p>Target PR</p>
                    </div>
                </div>
    
                <div className="submit-pr">
                    <input type="submit" value="Lets Go" />
                </div>
            </form>

        );
    }
    
}

const mapStateToProps = (state) => {
    return { body: state.body }
}

export default connect(mapStateToProps)(NewSquat)
