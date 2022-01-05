import update from 'immutability-helper'
import { FILM_LOAD_IN_PROGRESS, FILM_LOAD_FAIL, FILM_ADD } from '../actions/type';
const initialState = {
    items: [],
    status: null,
    namefilm:'home alone'
}

const reducer = (state = initialState, action) => {
    console.log('action', action);
    //тут будут экшены

    const findFilmIdx = (id) => {
        return state.items.findIndex(item => item.id === id);
      }
    
      switch(action.type) {
        case FILM_LOAD_IN_PROGRESS:
          {
            const item = { 
              id: action.payload.id, status: 'in_progress', item: null
            };
    
            return update(state, { items: { $push: [item] }});
          }
        case FILM_LOAD_FAIL:
          {
            const idx = findFilmIdx(action.payload.id);
            return update(state, { items: { [idx]: 
              { status: { $set: 'fail' } }
            }});
          } 
        case FILM_ADD:
          {
            const idx = findFilmIdx(action.payload.id);
            return update(state, { items: { [idx]: 
              { status: { $set: 'ok' }, item: { $set: action.payload.item } }
            }});
          } 
      }

    return state;
}

export default reducer;