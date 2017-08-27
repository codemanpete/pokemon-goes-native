import * as APIEncounterUtil from '../util/encounter_api_util';

export const RECEIVE_ENCOUNTER = "RECEIVE_ENCOUNTER";

export const fetchEncounterForPosition = pos => dispatch => (
  APIEncounterUtil.fetchRandomPokemon().then(
    encounter => dispatch(receiveEncounter(encounter, pos))
  )
);

export const receiveEncounter = (encounter, pos) => ({
  type: RECEIVE_ENCOUNTER,
  encounter,
  pos
});
