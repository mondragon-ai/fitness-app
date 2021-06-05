import React, { useState } from 'react'
import Calendar from 'react-calendar';
// import TileContent from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const datesToAddContentTo = [new Date(), new Date()];

function tileContent({ date, view }) {
    // Add class to tiles in month view only
    if (view === 'month') {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (datesToAddContentTo.find(dDate =>  dDate === date )) {
        return "red";
      }
    }
  }

  
const Calander = () => {
    const [value, onChange] = useState(new Date());

    const handleClick = (value) => {

        console.log(value)
        onChange()
    }

    return (
        <div className="calander-main">
            calander test
            <Calendar
                onChange={(value, event) => handleClick(value)}
                value={value}
                tileContent={tileContent}
            />
        </div>
    )
}

export default Calander
