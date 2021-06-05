import React, { Component } from 'react'
import Post from '../components/feed/Post'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class Feed extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            posts: [{
                post_id: "987598n9yn9873n",
                username: "Mondragon.fit",
                location: "Sao Paulo",
                user_avatar: "pic_url",
                post_src: "post_src",
                usr_liked: false,
                likes: 19840,
                legend: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
                comments: [{
                    username: "JoeRogan",
                    user_avatar: "pic_url",
                    comment: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."                 
                }]
            }]
        }
    }
    
    render() {

        if (!this.props.firebase.uid) return <Redirect to="/signin" />
        
        return (
            <div className="feed">
                <Post value={this.state} />
                <Post value={this.state} />
                <Post value={this.state} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
      firebase: state.firebase.auth
    }
  }

export default connect(mapStateToProps)(Feed)
