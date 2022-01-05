import { combineReducers } from 'redux';

import filmsReducer from './films';

export default function createReducer(injectReducers = {}) {
    const rootReducer =  combineReducers ({
        films: filmsReducer,



        //здесь дописывать новые редюсеры

        ...injectReducers
    }) 
    return rootReducer;
}
