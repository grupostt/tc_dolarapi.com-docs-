async function getPokemonData(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        
        if (!response.ok) {
            throw new Error(`Pokemon not found: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        return null;
    }
}

// Ejemplo de uso:
 getPokemonData('pikachu').then(pokemon => console.log(pokemon));