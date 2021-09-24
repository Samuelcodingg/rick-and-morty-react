import React from 'react';
import rick from './rick-sanchez.png';

export const NotFound = () => {
    return (
        <div className="text-center p-5 m-4">
            <h1>What are you looking for, dude? this page does not exist</h1>
            <img src={rick} alt="rick-sanchez" className="rick"/>
            <h4>Wubba Lubba Dub Dub! look at the top and enter to the other pages man.</h4>
        </div>
    )
}
