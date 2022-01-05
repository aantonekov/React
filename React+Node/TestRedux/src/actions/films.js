import axios from 'axios';
import { FILM_LOAD_IN_PROGRESS, FILM_LOAD_FAIL, FILM_ADD } from './type';

const actionOne = async (id) => {
    const action = {
        type: FILM_LOAD_IN_PROGRESS, payload: { id }
    };
    return action
}

const actionTwo = async (id) => {
    const url = `https://swapi.dev/api/films/${id}/`;
    const result = await axios.get(url);

    if(result.status !== 200) {
        const action = {type: FILM_LOAD_FAIL, payload: { id }};
        return action;
    }

    const action = {type: FILM_ADD, payload: { id, item: result.data }}
    return action;
}

const getById = async (id, dispatch) => {
    dispatch(await actionOne(id));
    dispatch(await actionTwo(id));
}

export { getById };
