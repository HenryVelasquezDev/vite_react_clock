import React, { Component, useEffect, useState } from 'react';
import { Clock } from './components/Clock';

export const ClockApp = () => {

    const [tiempo, setTiempo] = useState({
        seconds: 90,
        minutes: 90,
        hours: 90
    })

    const setDate = () => {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        console.log(hours, minutes, seconds);
        console.log((((seconds == 0 ? 60 : seconds) / 60) * 360) + 90);

        setTiempo({
            seconds: (((seconds == 0 ? 60 : seconds) / 60) * 360) + 90,
            minutes: (((minutes == 0 ? 60 : minutes) / 60) * 360) + 90,
            hours: ((hours / 12) * 360) + 90
        });
    }

    useEffect(() => {
        setInterval(setDate, 1000);
    }, [])


    return (
        <>
            <Clock hours={tiempo.hours} minutes={tiempo.minutes} seconds={tiempo.seconds} />
        </>
    )
}
