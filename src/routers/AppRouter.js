import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route 
} from 'react-router-dom'
import { CharactersScreen } from '../components/characters/CharactersScreen'
import { EpisodesScreen } from '../components/episodes/EpisodesScreen'
import { HomePage } from '../components/homepage/HomePage'
import { NotFound } from '../components/ui/NotFound'

export const AppRouter = () => {
    return (
        <Router>

            <nav className="bg-dark text-white p-5">
                <h1>Example</h1>
            </nav>

            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/characters" component={CharactersScreen} />
                    <Route exact path="/episodes" component={EpisodesScreen}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )   
}
