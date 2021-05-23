import React, { Component } from 'react'
import CommentSection from "./CommentSection"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComments, faPaperPlane} from '@fortawesome/free-solid-svg-icons'

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
                    <div className="post-profile-img"><img style={{borderRadius: '50%', height: '4vh', width: '4vh', background: "black"}} /></div>
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
                    <div className="like-btn"><FontAwesomeIcon  icon={faThumbsUp} /></div>
                    <div className="comment-btn"><FontAwesomeIcon  icon={faComments} /></div>
                    <div className="share-post"><FontAwesomeIcon  icon={faPaperPlane} /></div>
                </div>

                {/* Stats */}
                <div className="post-stats">
                    <div className="likes-stats">19,859 likes</div>
                </div>

                {/* Comments */}
                <div className="post-comments">
                    <CommentSection />
                </div>

            </div>
        )
    }
}

export default Post
