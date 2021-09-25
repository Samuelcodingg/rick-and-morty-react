import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route 
} from 'react-router-dom'
import { CharacterScreen } from '../components/characters/CharacterScreen';
import { CharactersScreen } from '../components/characters/CharactersScreen'
import { EpisodeScreen } from '../components/episodes/EpisodeScreen';
import { EpisodesScreen } from '../components/episodes/EpisodesScreen';
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
                    <Route exact path="/character/:id" component={CharacterScreen} />
                    <Route exact path="/episodes" component={EpisodesScreen}/>
                    <Route exact path="/episode/:id" component={EpisodeScreen} />
                    <Route component={NotFound} />
                </Switch>
            </div>

            <Footer />
        </Router>
    )   
}
