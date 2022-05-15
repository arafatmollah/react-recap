import React, { useState } from 'react';
import './Increments.css'

const Increments = () => {
    const [count, setCount] = useState(0);
    const counter = () => {
        const newCount = count + 10;
        setCount(newCount)
    }
    return (
        <div className='increment'>
            <h4 style={{color:'violet', fontSize: '20px'}}>Increment: { count}</h4>
            <button className='button' onClick={counter}>Charging Up</button>
        </div>
    );
};

export default Increments;