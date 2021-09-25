export const getCharacthers = async(characters = '') => {
    const url = `https://rickandmortyapi.com/api/character/?name=${characters}`;
    const resp = await fetch(url);
    const { results } = await resp.json();

    const charactersFounded = results.map( characterFounded => {
        return {
            id: characterFounded.id,
            name: characterFounded.name,
            urlImage: characterFounded.image
        }
    });

    return charactersFounded;
}