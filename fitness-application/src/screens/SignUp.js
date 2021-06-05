import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { signUp } from '../store/actions/authActions'
import { connect } from 'react-redux'
import { changeUrl } from '../store/actions/authActions'

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
        this.props.signUp(this.state);
    }

    render() {
        return (
            <div className="auth-screen">

                <div className="signin-card">
                    <div className="logo"></div>
                    <form onSubmit={this.handleSubmit} action="">
                        <input name="username" id="username" type="text" placeholder="User Name" value={this.state.username} onChange={this.handleChange}/>
                        <input name="password" id="password" type="text" placeholder="Password" value={this.state.Password} onChange={this.handleChange} />
                        <input value="Create Account" type="submit" />
                        <span>Have an Account? <Link className="signup-link" to="/signin">Sign In Here</Link></span>
                    </form>
                </div>
                
            </div>
        )
    }

    componentWillUnmount() {
        this.props.changeParam("/")
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth.isLoggedIn }
}

const mapDispatchToprops = (dispatch) => {

    return {
        signUp: (credentials) => dispatch(signUp(credentials)),
        changeParam: (url_param) => dispatch(changeUrl(url_param))
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(SignUp)
