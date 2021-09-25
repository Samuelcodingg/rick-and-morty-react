import React, { useState } from 'react'
import { AppRouter } from './routers/AppRouter'
import './App.css'
import { AppContext } from './AppContext';

export const App = () => {
    
    const [characters, setCharacters] = useState(['']);

    return (
        <AppContext.Provider value={{
            characters,
            setCharacters
        }}>
            <AppRouter />
        </AppContext.Provider>
    )
}
