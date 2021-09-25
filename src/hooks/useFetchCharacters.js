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
            .catch((error) => {
                setState({
                    data: []
                })
                console.log(error);
            })
    }, [characters]);

    return state;
}