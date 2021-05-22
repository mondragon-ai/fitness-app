import React, { Component } from 'react'
import { Link } from "react-router-dom";

class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
    }
    

    render() {
        return (
            <div className="auth-screen">

                <div className="signin-card">
                    <div className="logo"></div>
                    <form onSubmit={this.handleSubmit} action="">
                        <input id="username" type="text" placeholder="User Name" value={this.state.username} onChange={this.handleChange}/>
                        <input id="password" type="text" placeholder="Password" value={this.state.Password} onChange={this.handleChange} />
                        <span>Have an Account? <Link className="signup-link" to="/signin">Sign In Here</Link></span>
                        <input value="Create Account" type="submit" />
                    </form>
                </div>
                
            </div>
        )
    }
}

export default SignUp