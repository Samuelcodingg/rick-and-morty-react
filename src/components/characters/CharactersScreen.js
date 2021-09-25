import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import { useFecthCharacters } from '../../hooks/useFetchCharacters';
import './index.css';

export const CharactersScreen = () => {

    const [inputCharacterValue, setInputCharacterValue] = useState('');
    const { setCharacters } = useContext(AppContext);
    const { data } = useFecthCharacters();

    const handleInputCharacterChange = (e) => {
        setInputCharacterValue(e.target.value);
        setCharacters(e.target.value);
    }

    return (

        <>
            <div>
                <div className="py-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="type a character..."
                        value={inputCharacterValue}
                        onChange={handleInputCharacterChange}
                    />
                </div>
            </div>

            <div className="row mb-5 container-items">
                {
                    data.map((item) => 
                        <div className="col-6 col-md-3 text-center my-4 animate__animated animate__fadeIn" key={item.id}>
                            <h4>{item.name}</h4>
                            <img src={item.urlImage} alt={item.name} className="character-img" />
                            <div className="position-relative button-char">
                                <Link to={`/character/${item.id}`} role="button" className="btn btn-outline-light">
                                    See more
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}
