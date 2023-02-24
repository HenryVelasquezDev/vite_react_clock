import React from 'react'

export const Clock = ({ hours, minutes, seconds }) => {
    return (
        <div className="clock">
            <div className="clock-face">
                <div className="hand hour-hand"
                    style={{ transform: `rotate(${hours}deg)` }}
                ></div>
                <div className="hand min-hand"
                    style={{ transform: `rotate(${minutes}deg)` }}
                ></div>
                <div className="hand second-hand"
                    style={{ transform: `rotate(${seconds}deg)` }}
                ></div>
            </div>
        </div>
    )
}
