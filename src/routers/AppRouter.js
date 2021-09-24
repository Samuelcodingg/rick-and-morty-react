import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route 
} from 'react-router-dom'
import { CharactersScreen } from '../components/characters/CharactersScreen'
import { EpisodesScreen } from '../components/episodes/EpisodesScreen'
import { HomePage } from '../components/homepage/HomePage'
import { Footer } from '../components/ui/Footer'
import { Navbar } from '../components/ui/Navbar'
import { NotFound } from '../components/ui/NotFound'

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />

            <div className="container">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/characters" component={CharactersScreen} />
                    <Route exact path="/episodes" component={EpisodesScreen}/>
                    <Route component={NotFound} />
                </Switch>
            </div>

            <Footer />
        </Router>
    )   
}
