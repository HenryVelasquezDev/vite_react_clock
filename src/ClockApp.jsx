import React, { useEffect, useState } from 'react';

export const ClockApp = () => {

    const [secondDegree, setSecondDegree] = useState(90);
    const [minuteDegree, setMinuteDegree] = useState(90);
    const [hourDegree, setHourDegree] = useState(90);

    const setDate = () => {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        console.log( hours, minutes, seconds );
        console.log( hourDegree, minuteDegree, secondDegree );

        setSecondDegree((((seconds == 0 ? 60 : seconds) / 60) * 360) + 90);
        setMinuteDegree((((minutes == 0 ? 60 : minutes)  / 60) * 360) + 90);
        setHourDegree(((hours / 12) * 360) + 90);
    }

    useEffect(() => {
        setInterval(setDate, 1000);
    }, [])


    return (
        <div className="clock">
            <div className="clock-face">
                <div className="hand hour-hand"
                    style={{ transform: `rotate(${hourDegree}deg)` }}
                ></div>
                <div className="hand min-hand"
                    style={{ transform: `rotate(${minuteDegree}deg)` }}
                ></div>
                <div className="hand second-hand"
                    style={{ transform: `rotate(${secondDegree}deg)` }}
                ></div>
            </div>
        </div>
    )
}
