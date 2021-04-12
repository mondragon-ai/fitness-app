import React from 'react'

const HotKeys = ({value}) => {

    const { emoji, title} = value;

    // console.log(value)

    return (
        <div className="grid-item">
            <div className="grid-icon-container">
                <div className="emoji-container">
                    <span className="emoji-icon">{emoji}</span>
                </div>
            </div>
            <h1> {title} </h1>
            <div className="add-key-container">
                <div className="add-emoji">➕</div>
            </div>
        </div>
    )
}

export default HotKeys
