
import UserStats from '../components/dash/UserStats';
import HotKeys from '../components/dash/HotKeys';
import UserFeed from '../components/feed/UserFeed';
import { connect } from 'react-redux';
import { Component } from 'react';
import { changeUrl } from '../store/actions/authActions'


const hotkeys = [
    {id: 1, title: "Add Workout", emoji: "🦄"}, 
    {id: 2, title: "Add PR", emoji: "🏋🏻‍♀️"},
    {id: 3, title: "Add Body", emoji: "🦄"}, 
    {id: 4, title: "Add Post", emoji: "🏋🏻‍♀️"},
];

const quickStats = [
    {id: 1, title: "Rank", subtitle: "Place"}, 
    {id: 2, title: "Total", subtitle: "‍Lbs"},
    {id: 3, title: "Followers", subtitle: ""}, 
];

class Profile extends Component {

    componentDidMount() {
        this.props.changeParam("/profile")
        console.log(this.props.user_info.url_param)
    }

    render() {
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
    return { user_info: state.auth}
}

const mapDispatchToprops = (dispatch) => {
    return {
        changeParam: (url_param) => dispatch(changeUrl(url_param))
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Profile)
