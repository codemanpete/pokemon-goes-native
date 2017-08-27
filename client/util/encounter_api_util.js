export const fetchRandomPokemon = () => {
  const pokeNumber = Math.floor(150 * Math.random()) + 1;
  return fetch(
    `http://pokeapi.co/api/v1/pokemon/${pokeNumber}`
  ).then(
    resp => resp.json()
  );
};
