import React, { Component } from 'react'
// import Comment from './Comment'

class CommentSection extends Component {
    render() {
        return (
            
            <div className="post-comment-section">
                <div className="user-comment-row" >
                    <div className="username-comment">
                        <h5>angel.mondragon</h5>
                    </div>
                    <div className="user-comment">
                        <p>This is a comment</p></div>
                    <div className="like-comment">X</div>
                </div>
                <div className="user-comment-row" >
                    <div className="username-comment">
                        <h5>angel.mondragon</h5>
                    </div>
                    <div className="user-comment">
                        <p>This is a comment</p></div>
                    <div className="like-comment">X</div>
                </div>
                <div className="user-comment-row" >
                    <div className="username-comment">
                        <h5>angel.mondragon</h5>
                    </div>
                    <div className="user-comment">
                        <p>This is a comment</p></div>
                    <div className="like-comment">X</div>
                </div>
                <form className="post-comment-form" >
                    <input type="textarea" placeholder="Add component . . ."/>
                    <input type="submit" value="Post"/>
                </form>
            </div>
        )
    }
}

export default CommentSection
