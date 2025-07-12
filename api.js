
// File: api.js

async function fetchPokemonData(){
    try {

        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById('pokemonSprite');
        imgElement.src = pokemonSprite;
        imgElement.style.display = 'block';
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
} 