import React from 'react';
import './index.css';
import homeimage from './homeimage.png';

export const HomePage = () => {
    return (
        <div className="text-center py-5">
            <h1>Sometimes science is more art than science...</h1>
            <img src={homeimage} alt="rickandmorty" class="home-image" />
            <h4>Well, that sounded really cliché, but you know what I mean. Just enjoy this website, old man</h4>
        </div>
    )
}
