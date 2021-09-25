import { useContext, useEffect, useState } from "react"
import { AppContext } from "../AppContext";
import { getCharacthers } from "../helpers/getCharacters";

export const useFecthCharacters = () => {

    const { characters } = useContext(AppContext);

    const [state, setState] = useState({
        data: []
    })

    useEffect(()=>{
        getCharacthers(characters)
            .then(chars => {
                setState({
                    data: chars
                })
            })
    }, [characters]);

    return state;
}