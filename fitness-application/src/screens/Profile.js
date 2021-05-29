
import UserStats from '../components/dash/UserStats';
import HotKeys from '../components/dash/HotKeys';
import UserFeed from '../components/feed/UserFeed';
import { connect } from 'react-redux';

import React from 'react'

const Profile = ({user_info}) => {
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

    

    return (
        <div>

            <UserStats user_info={user_info} value={quickStats} /> 

            <UserFeed />
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return { user_info: state.auth}
}
export default connect(mapStateToProps)(Profile)
