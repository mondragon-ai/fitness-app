import React, { Component } from 'react'


class NewBench extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
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
      }

    render() {

        const {d_bw_pr, d_ppr} = this.props.values

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
                        <h1>{d_bw_pr}<p>Lbs</p></h1>
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

export default NewBench
