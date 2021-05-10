import React, { Component } from 'react'

class Post extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="post">

                {/* Header */}
                <div className="post-header">
                    <div className="post-profile-img">IMG</div>
                    <div className="post-header-text">
                        <div className="post-header-text-handle">Mondragon.ai</div>
                        <div className="post-header-text-location">Sao Paolo</div>
                    </div>
                    {/* EDIT POST */}
                    {/* IF OWNER ? <UserPostSettings /> : <PostSettings />*/}
                </div>

                {/* Source */}
                <div className="post-source">
                    {/* if IMG ? <Image /> : <Video /> */}
                </div>

                {/* Post Tabs */}
                <div className="post-tabs">
                    <div className="like-btn">L</div>
                    <div className="comment-btn">C</div>
                    <div className="share-post">S</div>
                </div>

                {/* Stats */}
                <div className="post-stats">
                    <div className="likes-stats">19,859 likes</div>
                </div>

                {/* Comments */}
                <div className="post-comments">
                    
                </div>

            </div>
        )
    }
}

export default Post
