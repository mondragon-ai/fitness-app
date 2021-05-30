import React, { Component } from 'react'


class NewBody extends Component {

    constructor(props) {
        super(props);

        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
    
      handleChange(event) 
      {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) 
      {
        // alert('A name was submitted: ' + this.state.value);
        // Call Action & Pass State 
        event.preventDefault();

        this.props.close(this.state.value)
    }

    render() 
    {

        const {target_BMR, prev_cal} = this.props.values

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

export default NewBody
