
import UserStats from '../components/dash/UserStats'
import HotKeys from '../components/dash/HotKeys'
import UserFeed from '../components/feed/UserFeed'

import React from 'react'

const Profile = () => {
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

            <UserStats value={quickStats} /> 

            <UserFeed />
            
        </div>
    )
}

export default Profile
