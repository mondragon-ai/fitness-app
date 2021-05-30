import React, { Component } from 'react'


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
     * Pass Data to Parent for data check & 
     * ? Data Check here? 
     * @param {*} event 
     */
    handleSubmit(event) 
    {
        // alert('A name was submitted: ' + this.state.value);

        event.preventDefault();
        this.props.close(this.state.value)
    }

    render() {

        const {prev_bw, target_bw} = this.props.values

        return (

            <form onSubmit={this.handleSubmit} className="slider-pr">
    
                <div className="new-pr">
                    <div className="pr-item">
                        <input type="text" placeholder="165" onChange={this.handleChange} value={this.state.value} />
                    </div>
    
                    <div className="pr-item ">
                        <h1>{prev_bw}<p>Lbs</p></h1>
                        <p>Previous BW</p>
                    </div>
                    
                    <div className="pr-item">
                        <h1>{target_bw}<p>Lbs</p></h1>
                        <p>Target BW</p>
                    </div>
                </div>
    
                <div className="submit-pr">
                    <input type="submit" value="Lets Go" />
                </div>
            </form>

        );

    }
    
}

export default NewBody
