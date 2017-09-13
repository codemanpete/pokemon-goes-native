// randomly fetches a pokemon from the poke API with a pokemnumber
// between 1 and 151.
// TODO: make an index of "common" and "rare" pokemon and have their
// encounter chance adjusted accordingly.
export const fetchRandomPokemon = () => {
  const pokeNumber = Math.floor(150 * Math.random()) + 1;
  return fetch(
    `http://pokeapi.co/api/v1/pokemon/${pokeNumber}`
  ).then(
    resp => resp.json()
  );
};
