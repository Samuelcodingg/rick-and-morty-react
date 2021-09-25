import React, { useState } from 'react'
import { AppRouter } from './routers/AppRouter'
import './App.css'
import { AppContext } from './AppContext';

export const App = () => {
    
    const [characters, setCharacters] = useState(['']);
    const [episodes, setEpisodes] = useState(['']);

    return (
        <AppContext.Provider value={{
            characters,
            setCharacters,
            episodes,
            setEpisodes
        }}>
            <AppRouter />
        </AppContext.Provider>
    )
}
