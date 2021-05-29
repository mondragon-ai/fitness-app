import React, { Component } from 'react'


class NewBody extends Component {

    constructor(props) {
        super(props);

        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);

        // Call Action & Pass State 

        event.preventDefault();
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
