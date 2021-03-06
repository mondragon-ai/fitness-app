import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addBWAction } from '../../store/actions/bodyAction';

/**
 * * Submut new BW to DB
 * TODO: 1. Connect Dispatch to the props
 * TODO: 2. Data Check before submitting
 * ? Add Listener? 
 */
class NewBody extends Component {

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
     * Pass Data to Parent for data check & Subumt
     * @param {*} event 
     */
    handleSubmit(event) 
    {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.props.close(this.state.value)

        // TODO: 2. ^^^
        if (this.state.value > 0) {
            this.props.add_bw(this.state.value)
        }
    }

    render() {

        const {current_bw, target_bw} = this.props.body

        return (

            <form onSubmit={this.handleSubmit} className="slider-pr">
    
                <div className="new-pr">
                    <div className="pr-item">
                        <input data-validation="number" type="number" placeholder="165" onChange={this.handleChange} value={this.state.value} />
                    </div>
    
                    <div className="pr-item ">
                        <h1>{current_bw}<p>Lbs</p></h1>
                        <p>Previous BW</p>
                    </div>
                    
                    <div className="pr-item">
                        <h1>{target_bw}<p>Lbs</p></h1>
                        <p>Target BW</p>
                    </div>
                </div>
    
                <div className="submit-pr">
                    <input type="submit" value="Lets Go!" />
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
        add_bw: (bw) => dispatch(addBWAction(bw)),
    }
}
  
export default connect(mapStateToProps, mapDispatchToState)(NewBody)
