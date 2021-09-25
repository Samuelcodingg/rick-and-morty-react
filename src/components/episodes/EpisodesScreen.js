import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import { useFecthEpisodes } from '../../hooks/useFetchEpisodes';

export const EpisodesScreen = () => {
    
    const [inputEpisodeValue, setInputEpisodeValue] = useState('');
    const { setEpisodes } = useContext(AppContext);
    const { data } = useFecthEpisodes();

    const handleInputEpisodeChange = (e) => {
        setInputEpisodeValue(e.target.value);
        setEpisodes(e.target.value);
    }

    return (
        <>
            <div className="py-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="type an episode..."
                    value={inputEpisodeValue}
                    onChange={handleInputEpisodeChange}
                />
            </div>

            <div className="row mb-5 container-items">
                {
                    data.map((item) =>
                        <div className="col-6 col-md-3 text-center my-4 animate__animated animate__fadeIn  border border-shadow rounded py-5" key={item.id}>
                            <h4>{item.name}</h4>
                            <h5>Chapter: {item.number}</h5>
                            <Link to={`/character/${item.id}`} role="button" className="btn btn-dark">
                                See more
                            </Link>
                        </div>
                    )
                }
            </div>
        </>
    )
}
