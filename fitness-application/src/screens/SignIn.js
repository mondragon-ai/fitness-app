import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { changeUrl, signIn } from '../store/actions/authActions'
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
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
        this.props.logIn(this.state)
    }
    

    render() {
        if (this.props.firebase.uid) return <Redirect to="/" />
        return (
            <div className="auth-screen">

                <div className="signin-card">
                    <div className="logo"></div>
                    <form onSubmit={this.handleSubmit} action="">
                        <input name="email" id="email" type="text" placeholder="User Name" value={this.state.username} onChange={this.handleChange}/>
                        <input name="password" id="password" type="text" placeholder="Password" value={this.state.Password} onChange={this.handleChange} />
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



const mapStateToProps = (state) => {
    return { 
        firebase: state.firebase.auth
    }
}


const mapDispatchToprops = (dispatch) => {

    return {
        changeParam: (url_param) => dispatch(changeUrl(url_param)),
        logIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(SignIn)
