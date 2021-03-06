
import UserStats from '../components/dash/UserStats';
import HotKeys from '../components/dash/HotKeys';
import UserFeed from '../components/feed/UserFeed';
import { connect } from 'react-redux';
import { Component } from 'react';
import { changeUrl, signOut } from '../store/actions/authActions'
import { Redirect } from 'react-router-dom';


const hotkeys = [
    {id: 1, title: "Add Workout", emoji: "ð¦"}, 
    {id: 2, title: "Add PR", emoji: "ðð»ââï¸"},
    {id: 3, title: "Add Body", emoji: "ð¦"}, 
    {id: 4, title: "Add Post", emoji: "ðð»ââï¸"},
];

const quickStats = [
    {id: 1, title: "Rank", subtitle: "Place"}, 
    {id: 2, title: "Total", subtitle: "âLbs"},
    {id: 3, title: "Followers", subtitle: ""}, 
];

class Profile extends Component {

    componentDidMount() {
        this.props.changeParam("/profile")
        console.log(this.props.user_info.url_param)
    }

    render() {

        if (!this.props.firebase.uid) return <Redirect to="/signin" />
        return (
            <div>
                <UserStats user_info={this.props.user_info} value={quickStats} /> 
                <UserFeed />
            </div>
        )
    }

    componentWillUnmount() {
        this.props.changeParam("/")
        console.log(this.props.user_info.url_param)
    }
}

const mapStateToProps = (state) => {
    return { 
        user_info: state.auth,
        firebase: state.firebase.auth
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        changeParam: (url_param) => dispatch(changeUrl(url_param)),
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Profile)
