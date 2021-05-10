import React, { Component } from 'react'

export class Thumbnail extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            src: this.props.src
        }
    }
    
    render() {

        return (
            <div className="thumbnail">
                { (this.state.src.type == "IMG" ) ? <img /> : null }
            </div>
        )
    }
}

export default Thumbnail
