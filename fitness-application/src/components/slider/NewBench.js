import React, { Component } from 'react'
import { connect } from 'react-redux';


class NewBench extends Component {
 
    constructor(props) 
    {
        super();

        this.calculatePR(props.body.current_bw) 

        this.state = {
            value: '',
            b_bw_pr: 0
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.calculatePR = this.calculatePR.bind(this);
    }

    // Calculate PR
    calculatePR(bw) 
    {
        if (bw) {
            const pr = bw*2
            this.setState({
                b_bw_pr: pr
            })
        } else {
            this.setState({
                b_bw_pr: this.props.body.b_bw_pr
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

        const { b_ppr } = this.props.body

        return (

            <form onSubmit={this.handleSubmit} className="slider-pr">
    
                <div className="new-pr">
                    <div className="pr-item">
                        <input type="text" placeholder="235" onChange={this.handleChange} value={this.state.value} />
                    </div>
    
                    <div className="pr-item ">
                        <h1>{b_ppr}<p>Lbs</p></h1>
                        <p>Current PR</p>
                    </div>
                    
                    <div className="pr-item">
                        <h1>{this.state.b_bw_pr}<p>Lbs</p></h1>
                        <p>Target PR</p>
                    </div>
                </div>
    
                <div className="submit-pr">
                    <input type="submit" value="BENCH GOD!" />
                </div>
            </form>

        );

    }
    
}

const mapStateToProps = (state) => {
    return { body: state.body }
}

export default connect(mapStateToProps)(NewBench)
