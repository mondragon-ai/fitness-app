import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { changeUrl } from '../store/actions/authActions'

class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.changeParam("/signup")
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
                        <span>No Account? <Link className="signup-link" to="/signup">Create Here</Link></span>
                        <input value="Sign In" type="submit" />
                    </form>
                </div>
                
            </div>
        )
    }

    componentWillUnmount() {
        this.props.changeParam("/")
    }
}

const mapDispatchToprops = (dispatch) => {

    return {
        changeParam: (url_param) => dispatch(changeUrl(url_param))
    }
}

export default connect(null, mapDispatchToprops)(SignIn)
