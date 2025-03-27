export const fetchCharacters = async (name: string, page: number = 1) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching characters:", error);
        return null;
    }
};