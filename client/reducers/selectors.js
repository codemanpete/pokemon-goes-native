// Translates raw data from the poke API and creates an instance of
// a capturable pokemon (encounter). Default values while waiting for
// repsonse from server is shown below. Level is randomly assigned
// between 20 and 70. Moves are chosen only if they are valid for the
// assigned level. If a pokemon has no second type, it is given type of
// null. If no second move, it is given "------".
export const selectEncounterByIdx = ({ encounters }, idx) => {
  const apiData = encounters[idx];
  if(!apiData) {
    return {
      name: "",
      type1: "",
      type2: "",
      level: 0,
      move1: "-----",
      move2: "-----",
      number: 0,
      image_url: ""
    };
  }
  const type2 = apiData.types[1] || { name: null };
  const level = Math.floor( 50 * Math.random() + 20 );
  const validMoves = apiData.moves.filter( move => {
    return Boolean(move.level) && move.level <= level;
  });
  const move2 = validMoves[1] || { name: "-----" };
  return {
    name: apiData.name,
    type1: apiData.types[0].name,
    type2: type2.name,
    level,
    move1: validMoves[0].name,
    move2: move2.name,
    number: apiData.national_id,
    image_url: `http://pokeapi.co/media/img/${apiData.national_id}.png`
  };
};
