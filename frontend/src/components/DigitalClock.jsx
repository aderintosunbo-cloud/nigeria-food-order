import React, { useEffect, useState } from 'react';
import './DigitalClock.css';

const DigitalClock = () => {
    const [time, setTime] = useState({});

    const updateClock = () => {
        const now = new Date();
        const options = { timeZoneName: 'short' };

        setTime({
            Nigeria: now.toLocaleString('en-US', { timeZone: 'Africa/Lagos', ...options }),
            London: now.toLocaleString('en-US', { timeZone: 'Europe/London', ...options }),
            NewYork: now.toLocaleString('en-US', { timeZone: 'America/New_York', ...options }),
            Tokyo: now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo', ...options })
        });
    };

    useEffect(() => {
        const timer = setInterval(updateClock, 1000);
        updateClock(); // Initial call
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="digital-clock">
            <h1>Digital Clock</h1>
            <div className="clock-container">
                <div className="clock-time">
                    <h2>Nigeria (WAT): {time.Nigeria}</h2>
                    <h2>London (GMT): {time.London}</h2>
                    <h2>New York (EST): {time.NewYork}</h2>
                    <h2>Tokyo (JST): {time.Tokyo}</h2>
                </div>
            </div>
        </div>
    );
};

export default DigitalClock;