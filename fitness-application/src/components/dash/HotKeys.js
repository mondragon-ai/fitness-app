import React from 'react'

/**
 * * Hot Key Tab Modular: Nav or Slider Opener
 * TODO: 1: Clean
 * @param { value, handleOpen} = prop 
 * @returns 
 */
const HotKeys = ({value, handleOpen}) => {

    const { emoji, title, slider_name} = value;

    const openSlide = (event, text) => 
    {
        //console.log("Slide Opened: ", value.id, " - ", slider_name)
        handleOpen(slider_name);
    }

    return (
        <div onClick={(event) => openSlide(event)} className="grid-item">
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
