import React, { Component } from 'react'
import Thumbnail from './Thumbnail'

export class WallPost extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            src: {
                type: "IMG",
                src: 'src_url'
            }
        }
    }
    
    render() {

        return (
            <div className="wall-post">
                <div className="post-type">X</div>
                <Thumbnail src={this.state.src} />
            </div>
        )
    }
}

export default WallPost
