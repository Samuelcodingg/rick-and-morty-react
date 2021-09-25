import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import { useFecthCharacters } from '../../hooks/useFetchCharacters';

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

            <div className="row">
                {
                    data.map((item) => 
                        <img key={item.id} src={item.urlImage} alt={item.name} />
                    )
                }
            </div>
        </>
    )
}
