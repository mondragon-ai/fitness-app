import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCalsAction } from '../../store/actions/bodyAction'


/**
 * * Submit new Cals to DB
 * TODO: 1. Connect Dispatch to the props
 * TODO: 2. Data Check before submitting
 * ? Add Listener? 
 */
class NewCals extends Component {

    constructor(props)
    {
        super();

        // State
        this.state = {value: ''};

        // Bind Helper Fns
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        // TODO: 2. ^^^
        if (this.state.value > 0) {
            this.props.add_cals(this.state.value)
        }
    }

    render() 
    {
        const {target_BMR, prev_cal} = this.props.body

        return (

            <form onSubmit={this.handleSubmit} className="slider-pr">
    
                <div className="new-pr">
                    <div className="pr-item">
                        <input type="text" placeholder="2165" onChange={this.handleChange} value={this.state.value} />
                    </div>
    
                    <div className="pr-item ">
                        <h1>{prev_cal}<p>cals</p></h1>
                        <p>Previous Cals</p>
                    </div>
                    
                    <div className="pr-item">
                        <h1>{target_BMR}<p>cals</p></h1>
                        <p>Target BMR</p>
                    </div>
                </div>
    
                <div className="submit-pr">
                    <input type="submit" value="Lets Go" />
                </div>
            </form>

        );

    }
    
}

// * Mapping Body Data to Props
const mapStateToProps = (state) => {
    return { body: state.body }
}

// * Mapping Dispatched Actions to Props
const mapDispatchToState = (dispatch) => {
    return { 
        add_cals: (cals) => dispatch(addCalsAction(cals)),
    }
}

export default connect(mapStateToProps, mapDispatchToState)(NewCals)
