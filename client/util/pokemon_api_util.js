export const savePokemon = (pokemon, userId) => {
  const body = JSON.stringify({pokemon});
  return fetch(
    `http://localhost:3001/api/users/${userId}/pokemon`,
    {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body
    }
  ).then(
    resp => resp.json()
  );
};

export const fetchAllPokemon = userId => {
  return fetch(
    `http://localhost:3001/api/users/${userId}/pokemon`
  ).then(
    resp => resp.json()
  );
};
