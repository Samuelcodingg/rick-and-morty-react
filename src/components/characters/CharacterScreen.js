import React, { useState } from 'react'
import { useParams } from 'react-router'
// import { getCharactersById } from '../../helpers/getCharacterById';

export const CharacterScreen = () => {

    const { id } = useParams();
    const [data, setData] = useState({});

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(req => req.json())
    .then(resp => setData(resp));

    return (
        <div>
            {
                <div className="row my-5 text-center text-md-start div-character">
                    <div className="col-md-4">
                        <img src={data.image} alt={data.name} className="character-img-info animate__animated animate__fadeLeft" />
                    </div>
                    <div className="col-md-8 mt-5 mt-md-0 animate__animated animate__fadeLeft">
                        <h5>Name: {data.name}</h5>
                        <h5>Status: {data.status}</h5>
                        <h5>Species: {data.species}</h5>
                        <h5>Gender: {data.gender}</h5>
                        <h5>Created: {data.created}</h5>
                    </div>
                </div>
            }
        </div>
    )
}
