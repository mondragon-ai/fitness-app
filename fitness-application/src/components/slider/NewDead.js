import React, { Component } from 'react'
import { connect } from 'react-redux';

/**
 * * Submut new Daily Cals to DB
 * TODO: Connect Dispatch to the props
 * TODO: Clean
 * ? Add Listener? 
 * ? create calculatePR fn interface?
 */
class NewBench extends Component {

    constructor(props) {
        super(props);

        this.calculatePR(props.body.current_bw) 

        this.state = {
            value: '',
            d_bw_pr: 0
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.calculatePR = this.calculatePR.bind(this);
    }

    // Calculate PR
    calculatePR(bw) 
    {
        if (bw) {
            const pr = bw*3.6
            this.setState({
                d_bw_pr: pr
            })
        } else {
            this.setState({
                d_bw_pr: this.props.body.current_bw
            })
        }
    }

    componentDidMount() 
    {
        this.calculatePR(this.props.body.current_bw) 
        console.log("NEW DEADLIFT PR: ", this.props.body.current_bw)
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

        const { d_ppr } = this.props.body

        return (

            <form onSubmit={this.handleSubmit} className="slider-pr">
    
                <div className="new-pr">
                    <div className="pr-item">
                        <input type="text" placeholder="705" onChange={this.handleChange} value={this.state.value} />
                    </div>
    
                    <div className="pr-item ">
                        <h1>{d_ppr}<p>Lbs</p></h1>
                        <p>Current PR</p>
                    </div>
                    
                    <div className="pr-item">
                        <h1>{this.state.d_bw_pr}<p>Lbs</p></h1>
                        <p>Target PR</p>
                    </div>
                </div>
    
                <div className="submit-pr">
                    <input type="submit" value="DEAD LIFT GOD!" />
                </div>
            </form>

        );

    }
    
}

const mapStateToProps = (state) => {
    return { body: state.body }
}

export default connect(mapStateToProps)(NewBench)
