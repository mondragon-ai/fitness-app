import React from 'react'

const HotKeys = ({value, handleOpen}) => {

    const { emoji, title} = value;

    // console.log(value)
    const openSlide = (text) => {
        console.log("Slide Opened")
        handleOpen(title);
    }

    return (
        <div onClick={() => openSlide()} className="grid-item">
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
