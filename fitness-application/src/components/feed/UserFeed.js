import React, { Component } from 'react'
import WallPost from './WallPost';

export class UserFeed extends Component {

    render() {

        return (
            <div className="user-wall">
                <WallPost />
                <WallPost />
                <WallPost />
                <WallPost />
                <WallPost />
                <WallPost />
                <WallPost />
            </div>
        )
    }
}

export default UserFeed
