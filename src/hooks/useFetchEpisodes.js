import { useContext, useEffect, useState } from "react"
import { AppContext } from "../AppContext";
import { getEpisodes } from "../helpers/getEpisodes";

export const useFecthEpisodes = () => {

    const { episodes } = useContext(AppContext);

    const [state, setState] = useState({
        data: []
    })

    useEffect(()=>{
        getEpisodes(episodes)
            .then(ep => {
                setState({
                    data: ep
                })
            })
            .catch((error) => {
                setState({
                    data: []
                })
                console.log(error);
            })
    }, [episodes]);

    return state;
}