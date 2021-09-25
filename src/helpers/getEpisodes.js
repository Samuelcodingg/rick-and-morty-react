export const getEpisodes = async(episodes = '') => {
    const url = `https://rickandmortyapi.com/api/episode/?name=${episodes}`;
    const resp = await fetch(url);
    const { results } = await resp.json();

    const episodesFounded = results.map( episodeFounded => {
        return {
            id: episodeFounded.id,
            name: episodeFounded.name,
            number: episodeFounded.episode
        }
    });

    return episodesFounded;
}