import React, { useState } from 'react'
import { useParams } from 'react-router'

export const EpisodeScreen = () => {
    
    const { id } = useParams();
    const [data, setData] = useState({});

    const css = `
        .min-vh-75 {
            min-height: 60vh;
        }
    `

    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    .then(req => req.json())
    .then(resp => setData(resp));

    return (
        <div className="my-5 min-vh-75">
            <style>{css}</style>
            <h1>Name: {data.name}</h1>
            <h1>Air Date: {data.air_date}</h1>
            <h1>Episode: {data.episode}</h1>
            <h1>Url: {data.url}</h1>
            <h1>Created: {data.created}</h1>
        </div>
    )
}
