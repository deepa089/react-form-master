import React, { useContext } from 'react';
import { AssestContext } from '../GrandPa/GrandPa';

const Friend = () => {
    const gift = useContext(AssestContext)
    return (
        <div>
            <h2>Friend</h2>
            <p>Has : {gift}</p>
        </div>
    );
};

export default Friend;